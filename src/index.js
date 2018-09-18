import * as fs from 'fs';
import _ from 'lodash';
import indentString from 'indent-string';

import getParser from './parsers';

const createString = (key, value, sign = ' ') => `${sign} ${key}: ${value}`;

const genDiff = (path1, path2) => {
  const [json1, json2] = [path1, path2].map(p => getParser(p)(fs.readFileSync(p)));
  const [keys1, keys2] = [json1, json2].map(Object.keys);

  const mergedKeys = _.union(keys1, keys2);

  const result = mergedKeys
    .reduce((acc, key) => {
      const defaultStr = createString(key, json1[key]);
      if (json1[key] === json2[key]) return acc.concat(defaultStr);

      const addedStr = createString(key, json2[key], '+');
      if (!_.has(json1, key)) return acc.concat(addedStr);

      const deletedStr = createString(key, json1[key], '-');
      if (!_.has(json2, key)) return acc.concat(deletedStr);

      return acc.concat(addedStr, deletedStr);
    }, [])
    .map(str => indentString(str, 2))
    .join('\n');

  return `{\n${result}\n}`;
};

export default genDiff;
