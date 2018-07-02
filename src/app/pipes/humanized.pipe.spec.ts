import { HumanizedPipe } from './humanized.pipe';

describe('HumanizedPipe', () => {
  it('create an instance', () => {
    const pipe = new HumanizedPipe();
    expect(pipe).toBeTruthy();
  });
});
