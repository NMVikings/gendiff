import _ from 'lodash';

const nodeTypes = [
  {
    type: 'nested',
    check: (first, second, key) => first[key] instanceof Object && second[key] instanceof Object,
    process: (first, second, f) => f(first, second),
  },
  {
    type: 'not updated',
    check: (first, second, key) => first[key] === second[key],
    process: first => first,
  },
  {
    type: 'updated',
    check: (first, second, key) => _.has(second, key) && _.has(first, key),
    process: (first, second) => ({ old: first, new: second }),
  },
  {
    type: 'added',
    check: (first, second, key) => _.has(second, key) && !_.has(first, key),
    process: (first, second) => second,
  },
  {
    type: 'removed',
    check: (first, second, key) => _.has(first, key) && !_.has(second, key),
    process: first => first,
  },
];

const genAst = (json1, json2) => {
  const mergedKeys = _.union(...[json1, json2].map(Object.keys));

  return mergedKeys.map((key) => {
    const { type, process } = nodeTypes.find(({ check }) => check(json1, json2, key));

    if (type === 'nested') return { name: key, type, children: process(json1[key], json2[key], genAst) };

    return { name: key, type, value: process(json1[key], json2[key], genAst) };
  });
};

export default genAst;
