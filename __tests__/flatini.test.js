import genDiff from '../src';
import { result } from './__fixtures__/flatJSON/result.json';

test('GenDiff for flat INIs', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatINI';
  const pathToBefore = `${pathToFixtures}/before.ini`;
  const pathToAfter = `${pathToFixtures}/after.ini`;

  expect(genDiff(pathToBefore, pathToAfter)).toBe(result);
});
