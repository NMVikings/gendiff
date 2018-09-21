import genDiff from '../src';
import { tree, plain } from './__fixtures__/flatJSON/result.json';

test('GenDiff for flat JSONs in tree', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatJSON';
  const pathToBefore = `${pathToFixtures}/before.json`;
  const pathToAfter = `${pathToFixtures}/after.json`;

  expect(genDiff(pathToBefore, pathToAfter, 'tree')).toBe(tree);
});

test('GenDiff for flat JSONs in plain', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatJSON';
  const pathToBefore = `${pathToFixtures}/before.json`;
  const pathToAfter = `${pathToFixtures}/after.json`;

  expect(genDiff(pathToBefore, pathToAfter, 'plain')).toBe(plain);
});
