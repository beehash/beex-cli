const commander = require('commander');
console.log(2323);
commander.command('create <appname>').action((appname, cmd) => {
  console.log(435345);
  console.log(appname, cmd);
}).parse(process.argv);;