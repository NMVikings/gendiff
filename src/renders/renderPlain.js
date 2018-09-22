import _ from 'lodash';

const createString = (path, action) => `Property '${path.join('.')}' was ${action}`;

const renderValue = (value) => {
  if (value instanceof Object) return '[complex value]';

  if (typeof value === 'string') return `'${value}'`;

  return value;
};

const renderPlain = (ast) => {
  const iter = (nodes, parents) => {
    const mapping = {
      'not updated': () => null,
      updated: ({ name, type, value }) => `${createString([...parents, name], type)}. From ${renderValue(value.old)} to ${renderValue(value.new)}`,
      removed: ({ name, type }) => createString([...parents, name], type),
      added: ({ name, type, value }) => `${createString([...parents, name], type)} with value: ${renderValue(value)}`,
      nested: ({ name, children }) => iter(children, parents.concat(name)),
    };

    const newNodes = nodes.map(node => mapping[node.type](node)).filter(s => !!s);

    return _.flatten(newNodes).join('\n');
  };

  return iter(ast, []);
};

export default renderPlain;
