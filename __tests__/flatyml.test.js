import genDiff from '../src';
import { result } from './__fixtures__/flatYML/result.json';

test('GenDiff for flat YMLs', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatYML';
  const pathToBefore = `${pathToFixtures}/before.yml`;
  const pathToAfter = `${pathToFixtures}/after.yml`;

  expect(genDiff(pathToBefore, pathToAfter)).toBe(result);
});
