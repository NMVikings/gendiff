import * as path from 'path';
import yaml from 'js-yaml';

const parsers = {
  '.json': JSON.parse,
  '.yml': yaml.safeLoad,
};

const getParser = p => parsers[path.extname(p)];

export default getParser;
