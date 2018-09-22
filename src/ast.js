import _ from 'lodash';

const nodeTypes = [
  {
    check: (key, first, second) => first[key] instanceof Object && second[key] instanceof Object,
    process: (key, first, second, f) => ({
      name: key,
      type: 'nested',
      children: f(first[key], second[key]),
    }),
  },
  {
    check: (key, first, second) => first[key] === second[key],
    process: (key, first) => ({ name: key, type: 'not updated', value: first[key] }),
  },
  {
    check: (key, first, second) => _.has(second, key) && _.has(first, key),
    process: (key, first, second) => ({
      name: key,
      type: 'updated',
      value: { old: first[key], new: second[key] },
    }),
  },
  {
    check: (key, first, second) => _.has(second, key) && !_.has(first, key),
    process: (key, first, second) => ({ name: key, type: 'added', value: second[key] }),
  },
  {
    check: (key, first, second) => _.has(first, key) && !_.has(second, key),
    process: (key, first) => ({ name: key, type: 'removed', value: first[key] }),
  },
];

const genAst = (first, second) => {
  const mergedKeys = _.union(...[first, second].map(Object.keys));

  return mergedKeys.map((key) => {
    const { process } = nodeTypes.find(({ check }) => check(key, first, second));

    return process(key, first, second, genAst);
  });
};

export default genAst;
