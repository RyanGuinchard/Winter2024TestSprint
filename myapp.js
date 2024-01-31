global.DEBUG = true;

const fs = require('fs');

const myArgs = process.argv.slice(2);

if(DEBUG) if (myArgs.length >= 1) console.log('the myapp.args: ', myArgs);

switch(myArgs[0]) {
    case 'init':
    case 'i':
        if(DEBUG) console.log(myArgs[0], ' - initiaze the app')
        break;
}
