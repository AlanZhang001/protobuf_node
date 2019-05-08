## proto 在node 的使用

[在NodeJS中玩转Protocol Buffer](https://imweb.io/topic/570130a306f2400432c1396c)

## 将proto文件转成其他文件

见 [pbjs cli](https://github.com/protobufjs/protobuf.js#command-line)

```js
// 转成js文件
./node_modules/protobufjs/bin/pbjs -t static-module -w commonjs ./src/nodedemo.first.proto > ./src/nodedemo.first.js
// 转成json文件
 ./node_modules/protobufjs/bin/pbjs -t json ./src/nodedemo.first.proto > ./src/nodedemo.first.json
```