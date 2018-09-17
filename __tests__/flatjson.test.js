import genDiff from '../src';
import { result } from './__fixtures__/flatJSON/result.json';

test('GenDiff for flat JSONs', () => {
  const pathToFixtures = '/Users/nmvikings/repo/hexlet/project-lvl2-s329/__tests__/__fixtures__/flatJSON';
  const pathToBefore = `${pathToFixtures}/before.json`;
  const pathToAfter = `${pathToFixtures}/after.json`;

  expect(genDiff(pathToBefore, pathToAfter)).toBe(result);
});
