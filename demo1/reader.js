const HelloWorld = require('../src/nodedemo.first.js')['nodedemo']['helloworld'];
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, './demo1.log'), function (err, data) {
    if (!err) {
        console.log(data); // 来看看Node里的Buffer对象长什么样子。
        var message = HelloWorld.decode(data);
        console.log(message);
    }
});