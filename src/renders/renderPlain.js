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

const renderPlain = (ast) => {
  // const iter = nodes => _.flatten(nodes
  //   .reduce((acc, {
  //     type,
  //     name,
  //     value,
  //     children,
  //   }) => {
  //     if (type === 'not updated') {
  //       return acc.concat(createString(name, value));
  //     }

  //     if (type === 'updated') {
  //       return acc.concat(createString(name, value.new, '+'), createString(name, value.old, '-'));
  //     }

  //     if (type === 'removed') {
  //       return acc.concat(createString(name, value, '-'));
  //     }

  //     if (type === 'added') {
  //       return acc.concat(createString(name, value, '+'));
  //     }

  //     if (type === 'nested') {
  //       return acc.concat(`  ${name}: {`, iter(children).map(str => indentString(str, 2)), '  }');
  //     }

  //     return '';
  //   }, []))
  //   .map(str => indentString(str, 2));

  // return `{\n${iter(ast).join('\n')}\n}`;
};

export default renderPlain;
