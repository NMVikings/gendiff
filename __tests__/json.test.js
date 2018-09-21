import genDiff from '../src';
import { result } from './__fixtures__/JSON/result.json';

test('GenDiff for flat JSONs', () => {
  const pathToFixtures = './__tests__/__fixtures__/JSON';
  const pathToBefore = `${pathToFixtures}/before.json`;
  const pathToAfter = `${pathToFixtures}/after.json`;

  expect(genDiff(pathToBefore, pathToAfter, 'tree')).toBe(result);
});
