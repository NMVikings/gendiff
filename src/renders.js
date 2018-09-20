import indentString from 'indent-string';

const createString = (name, data, sign = ' ') => {
  if (typeof data !== 'object') return `${sign} ${name}: ${data}`;

  const children = Object.keys(data)
    .map(key => createString(key, data[key]))
    .map(str => indentString(str, 2))
    .join('\n');

  return `${sign} ${name}: {\n  ${children}\n  }`;
};

const renderNode = ({
  changed,
  name,
  value,
  status,
}) => {
  if (!changed) {
    return createString(name, value);
  }

  return createString(name, value, status === 'added' ? '+' : '-');
};

const astRender = (ast) => {
  // console.log(JSON.stringify(ast, null, 2))
  const result = ast.children
    .map((node) => {
      if (node.children) {
        return `${node.name}: ${astRender(node)}`.split('\n').map(s => indentString(s, 2)).join('\n');
      }

      return renderNode(node);
    })
    .map(str => indentString(str, 2))
    .join('\n');

  return `{\n${result}\n}`;
};

const getRender = (format) => {
  console.log(format);

  return astRender;
};

export default getRender;
