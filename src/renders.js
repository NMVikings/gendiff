import indentString from 'indent-string';
import _ from 'lodash';

const createString = (name, value, sign = ' ') => {
  if (value instanceof Object) {
    const children = Object.keys(value)
      .map(key => createString(key, value[key]))
      .map(str => indentString(str, 2));

    return [`${sign} ${name}: {`, children.map(str => indentString(str, 2)), '  }'];
  }

  return `${sign} ${name}: ${value}`;
};

const renderTree = (ast) => {
  const iter = nodes => _.flatten(nodes
    .reduce((acc, {
      type,
      name,
      value,
      children,
    }) => {
      if (type === 'not changed') {
        return acc.concat(createString(name, value));
      }

      if (type === 'changed') {
        return acc.concat(createString(name, value.new, '+'), createString(name, value.old, '-'));
      }

      if (type === 'deleted') {
        return acc.concat(createString(name, value, '-'));
      }

      if (type === 'inserted') {
        return acc.concat(createString(name, value, '+'));
      }

      if (type === 'nested') {
        return acc.concat(`  ${name}: {`, iter(children).map(str => indentString(str, 2)), '  }');
      }

      return '';
    }, []))
    .map(str => indentString(str, 2));

  return `{\n${iter(ast).join('\n')}\n}`;
};

const renders = {
  tree: renderTree,
};

const getRender = format => renders[format];

export default getRender;
