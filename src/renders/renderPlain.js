const createString = (path, action) => `Property '${path.join('.')}' was ${action}`;

const renderValue = (value) => {
  if (value instanceof Object) return '[complex value]';

  if (typeof value === 'string') return `'${value}'`;

  return value;
};

const renderPlain = (ast) => {
  const iter = (nodes, parents) => nodes
    .reduce((acc, {
      type,
      name,
      value,
      children,
    }) => {
      if (type === 'not updated') {
        return acc;
      }

      if (type === 'updated') {
        return acc.concat(`${createString([...parents, name], type)}. From ${renderValue(value.old)} to ${renderValue(value.new)}`);
      }

      if (type === 'removed') {
        return acc.concat(createString([...parents, name], type));
      }

      if (type === 'added') {
        return acc.concat(`${createString([...parents, name], type)} with value: ${renderValue(value)}`);
      }

      if (type === 'nested') {
        return acc.concat(iter(children, parents.concat(name)));
      }

      return acc;
    }, []);

  return iter(ast, []).join('\n');
};

export default renderPlain;
