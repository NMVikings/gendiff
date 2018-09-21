import * as fs from 'fs';

import genAst from './ast';
import getParser from './parsers';
import getRender from './renders';

const genDiff = (path1, path2, format) => {
  const [json1, json2] = [path1, path2].map(p => getParser(p)(fs.readFileSync(p, 'utf-8')));
  const ast = genAst(json1, json2);

  const result = getRender(format)(ast);

  return result;
};

export default genDiff;
