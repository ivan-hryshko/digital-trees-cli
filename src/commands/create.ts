import * as fs from 'fs';
import { Tree } from '../models/tree';

export function createTree() {
  const tree = new Tree()

  const config = tree.getTreeConfig()
  console.log('config :>> ', config);
  fs.writeFileSync('data/tree.json', JSON.stringify(tree, null, 2));
  console.log('🌱 New tree created.');
}
