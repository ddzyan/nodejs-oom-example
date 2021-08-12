## 简介

针对常见的几种内存泄漏场景，进行 heapdump 堆快照打印，并且进行内存分析

## 案例

### 闭包

运行

```
node --expose-gc ./index.js
```
