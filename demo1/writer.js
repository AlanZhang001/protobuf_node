const HelloWorld = require('../src/nodedemo.first.js')['nodedemo']['helloworld'];
const fs = require('fs');
const path = require('path');

let hw = new HelloWorld({
    'id': 101,
    'str': 'Hello000000',
    '34234524': 3452345245
});

let buffer = HelloWorld.encode(hw).finish();

var message = HelloWorld.decode(buffer);
var obj = HelloWorld.toObject(message);
console.log(message);

console.log(obj);

fs.writeFile(path.join(__dirname,'./demo1.log'), buffer,err=>{
    if(!err) {
        console.log('write done');
    }
});