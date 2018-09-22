import genDiff from '../src';
import { tree, plain, json } from './__fixtures__/JSON/result.json';

test('GenDiff for JSONs in tree', () => {
  const pathToFixtures = './__tests__/__fixtures__/JSON';
  const pathToBefore = `${pathToFixtures}/before.json`;
  const pathToAfter = `${pathToFixtures}/after.json`;

  expect(genDiff(pathToBefore, pathToAfter, 'tree')).toBe(tree);
});

test('GenDiff for JSONs in plain', () => {
  const pathToFixtures = './__tests__/__fixtures__/JSON';
  const pathToBefore = `${pathToFixtures}/before.json`;
  const pathToAfter = `${pathToFixtures}/after.json`;

  expect(genDiff(pathToBefore, pathToAfter, 'plain')).toBe(plain);
});

test('GenDiff for JSONs in json', () => {
  const pathToFixtures = './__tests__/__fixtures__/JSON';
  const pathToBefore = `${pathToFixtures}/before.json`;
  const pathToAfter = `${pathToFixtures}/after.json`;

  expect(genDiff(pathToBefore, pathToAfter, 'json')).toBe(json);
});
