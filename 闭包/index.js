const heapdump = require("heapdump");
const { EventEmitter } = require("events");

var test = new EventEmitter();

heapdump.writeSnapshot(`./${Date.now()}.heapdump`);

function run() {
  const innerData = Buffer.alloc(100);

  function outClosure() {
    void innerData;
  }

  test.on("error", () => {
    console.log("error");
  });

  outClosure;
}

for (let index = 0; index < 4; index++) {
  run();
}

// 进行垃圾回收
gc();
heapdump.writeSnapshot(`./${Date.now()}.heapdump`);
