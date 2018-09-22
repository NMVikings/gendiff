import genDiff from '../src';
import { tree, plain, json } from './__fixtures__/flatINI/result.json';

test('GenDiff for flat INIs in tree', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatINI';
  const pathToBefore = `${pathToFixtures}/before.ini`;
  const pathToAfter = `${pathToFixtures}/after.ini`;

  expect(genDiff(pathToBefore, pathToAfter, 'tree')).toBe(tree);
});


test('GenDiff for flat INIs in plain', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatINI';
  const pathToBefore = `${pathToFixtures}/before.ini`;
  const pathToAfter = `${pathToFixtures}/after.ini`;

  expect(genDiff(pathToBefore, pathToAfter, 'plain')).toBe(plain);
});

test('GenDiff for flat INIs in json', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatINI';
  const pathToBefore = `${pathToFixtures}/before.ini`;
  const pathToAfter = `${pathToFixtures}/after.ini`;

  expect(genDiff(pathToBefore, pathToAfter, 'json')).toBe(json);
});
