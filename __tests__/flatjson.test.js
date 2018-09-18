import genDiff from '../src';
import { result } from './__fixtures__/flatJSON/result.json';

test('GenDiff for flat JSONs', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatJSON';

  expect(genDiff(`${pathToFixtures}/before.json`, `${pathToFixtures}/after.json`)).toBe(result);
});
