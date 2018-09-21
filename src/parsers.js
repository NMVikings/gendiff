import * as path from 'path';
import yaml from 'js-yaml';
import ini from 'ini';
import isNumber from 'is-number';

const formatIni = obj => Object.keys(obj).reduce((acc, key) => {
  const value = obj[key];

  if (value instanceof Object) {
    return { ...acc, [key]: formatIni(value) };
  }

  if (isNumber(value)) return { ...acc, [key]: parseInt(value, 10) };

  return { ...acc, [key]: value };
}, {});

const parsers = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
  '.ini': p => formatIni(ini.parse(p)),
};

const getParser = p => parsers[path.extname(p)];

export default getParser;
