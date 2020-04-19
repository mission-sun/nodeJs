#!/usr/bin/env node
const fs = require('fs');

const pk = fs.readFileSync('./package.json', 'utf-8');
const version = JSON.parse(pk).version;

const { program } = require('commander');

program
 .version(version)
 .option('-d, --debug', 'output extra debugging')
 .option('-s, --small', 'small pizza size')
 .option('-p, --pizza-type <type>', 'add the specified type of cheese', 'blue');

program.parse(process.argv);

console.log(program.opts())

console.log('sun hello');
