var chalk = require('chalk'),
    projectNodeVersion = require('./package.json').engines.node,
    globalNodeVersion = process.version;

if (projectNodeVersion !== globalNodeVersion) {

    console.log(chalk.dim('********************************************************************'));
    console.log(chalk.dim('********************************************************************'));
    console.log(chalk.dim('********************************************************************'));
    console.log('');

    console.log(chalk.red('NODE VERSION ERROR!'));
    console.log('-------------------------------------------');
    console.log('');
    console.log(chalk.green('Project Node Version:'), projectNodeVersion);
    console.log('');
    console.log(chalk.green('Global Node Version:'), globalNodeVersion);
    console.log('');
    console.log(chalk.green('Please update your global node version to '), projectNodeVersion);

    console.log('');
    console.log(chalk.dim('********************************************************************'));
    console.log(chalk.dim('********************************************************************'));
    console.log(chalk.dim('********************************************************************'));

    // tell node to exit process
    process.exit(1);

} else {
    console.log('');
    console.log(chalk.green.bold('NODE VERSIONS ARE A MATCH!!'));
    console.log('');
}
