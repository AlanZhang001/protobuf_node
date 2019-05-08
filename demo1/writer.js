const HelloWorld = require('../src/nodedemo.first.js')['nodedemo']['helloworld'];
const fs = require('fs');
const path = require('path');

let hw = new HelloWorld({
    'id': 101,
    'str': 'Hello000000'
});

let buffer = HelloWorld.encode(hw).finish();

fs.writeFile(path.join(__dirname,'./demo1.log'), buffer,err=>{
    if(!err) {
        console.log('write done');
    }
});