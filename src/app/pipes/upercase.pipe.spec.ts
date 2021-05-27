import { UpercasePipe } from './upercase.pipe';

describe('UpercasePipe', () => {
  it('create an instance', () => {
    const pipe = new UpercasePipe();
    expect(pipe).toBeTruthy();
  });
});
