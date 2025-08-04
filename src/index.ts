#!/usr/bin/env bun
import { createTree } from './commands/create.js';

console.log('hello ');

const args = process.argv.slice(2);
console.log('args :>> ', args);


switch (`${args[0]} ${args[1]}`) {
  case 'create tree':
    createTree();
    break;
  case 'next year':
    // nextYear();
    break;
  case 'stats undefined':
    // stats();
    break;
  default:
    console.log('Command not recognized.');
}

