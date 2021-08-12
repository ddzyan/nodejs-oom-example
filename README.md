## 简介

针对常见的几种内存泄漏场景，进行 heapdump 堆快照打印，并且进行内存分析.

每个案例将输出代码执行前后的 heapdump ，可以将文件使用 chrome devtool 内存工具进行分析，后续会增加一篇博文配合说明如何进行查看

## 案例

### 闭包

运行

```
node --expose-gc ./index.js
```
