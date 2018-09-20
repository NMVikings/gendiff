import _ from 'lodash';

const createNode = (name, options = {}) => ({
  name,
  ...options,
});

const genAst = (json1, json2) => {
  const [keys1, keys2] = [json1, json2].map(Object.keys);

  const mergedKeys = _.union(keys1, keys2);

  const children = mergedKeys
    .reduce((acc, key) => {
      if (typeof json1[key] === 'object' && typeof json2[key] === 'object') {
        return acc.concat(createNode(key, genAst(json1[key], json2[key])));
      }

      if (json1[key] === json2[key]) return acc.concat(createNode(key, { value: json1[key] }));

      const addedNode = createNode(key, { value: json2[key], changed: true, status: 'added' });
      if (!_.has(json1, key)) return acc.concat(addedNode);

      const removedNode = createNode(key, { value: json1[key], changed: true, status: 'removed' });
      if (!_.has(json2, key)) return acc.concat(removedNode);

      return acc.concat(addedNode, removedNode);
    }, []);

  return { children };
};

export default genAst;
