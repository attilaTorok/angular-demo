import { BytesToHumanReadablePipe } from './bytes-to-human-readable-.pipe';

describe('BytesToHumanReadablePipe', () => {
  it('create an instance', () => {
    const pipe = new BytesToHumanReadablePipe();
    expect(pipe).toBeTruthy();
  });
});
