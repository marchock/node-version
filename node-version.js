var projectNodeVersion = require('./package.json').engines.node,
    globalNodeVersion = process.version;

if (projectNodeVersion !== globalNodeVersion) {

console.log('****************************************************************************');
console.log('****************************************************************************');
console.log('****************************************************************************');
console.log('');

console.log('NODE VERSION ERROR!');
console.log('-------------------------------------------');
console.log('');
console.log('Project Node Version:', projectNodeVersion);
console.log('');
console.log('Global Node Version:', globalNodeVersion);
console.log('');
console.log('Please update your global node version to ', projectNodeVersion);

console.log('');
console.log('****************************************************************************');
console.log('****************************************************************************');
console.log('****************************************************************************');

    // console.log('exit 1');
    process.exit(1);

} else {
    console.log('NODE VERSIONS ARE A MATCH');
    //process.exit(0);
}
