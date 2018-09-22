import genDiff from '../src';
import { tree, plain, json } from './__fixtures__/flatYML/result.json';

test('GenDiff for flat YMLs in tree', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatYML';
  const pathToBefore = `${pathToFixtures}/before.yml`;
  const pathToAfter = `${pathToFixtures}/after.yml`;

  expect(genDiff(pathToBefore, pathToAfter, 'tree')).toBe(tree);
});

test('GenDiff for flat YMLs in plain', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatYML';
  const pathToBefore = `${pathToFixtures}/before.yml`;
  const pathToAfter = `${pathToFixtures}/after.yml`;

  expect(genDiff(pathToBefore, pathToAfter, 'plain')).toBe(plain);
});

test('GenDiff for flat YMLs in json', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatYML';
  const pathToBefore = `${pathToFixtures}/before.yml`;
  const pathToAfter = `${pathToFixtures}/after.yml`;

  expect(genDiff(pathToBefore, pathToAfter, 'json')).toBe(json);
});
