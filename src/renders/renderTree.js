import _ from 'lodash';

const getIndent = depth => '  '.repeat(depth);

const createString = (name, value, depth, sign = ' ') => {
  if (value instanceof Object) {
    const children = Object.keys(value).map(key => createString(key, value[key], depth + 2));

    return _.flatten([
      `${getIndent(depth)}${sign} ${name}: {`,
      children,
      `${getIndent(depth)}  }`,
    ]).join('\n');
  }

  return `${getIndent(depth)}${sign} ${name}: ${value}`;
};

const renderTree = (ast) => {
  const iter = (nodes, depth) => {
    const mapping = {
      'not updated': ({ name, value }) => createString(name, value, depth + 1),
      updated: ({ name, value }) => [createString(name, value.new, depth + 1, '+'), createString(name, value.old, depth + 1, '-')],
      removed: ({ name, value }) => createString(name, value, depth + 1, '-'),
      added: ({ name, value }) => createString(name, value, depth + 1, '+'),
      nested: ({ name, children }) => [`${getIndent(depth + 1)}  ${name}: {`, iter(children, depth + 2), `${getIndent(depth + 1)}  }`],
    };

    const newNodes = nodes.map(node => mapping[node.type](node));

    return _.flatten(newNodes).join('\n');
  };

  return `{\n${iter(ast, 0)}\n}`;
};

export default renderTree;
