import genDiff from '../src';
import { result } from './__fixtures__/flatYML/result.json';

test('GenDiff for flat YMLs', () => {
  const pathToFixtures = './__tests__/__fixtures__/flatYML';

  expect(genDiff(`${pathToFixtures}/before.yml`, `${pathToFixtures}/after.yml`)).toBe(result);
});
