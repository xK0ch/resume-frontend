import {DefaultValuePipe} from './default-value.pipe';

describe('DefaultValuePipe', () => {
  let pipe: DefaultValuePipe;

  beforeEach(() => {
    pipe = new DefaultValuePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "-" if value is undefined', () => {
    const result = pipe.transform(undefined);
    expect(result).toBe('-');
  });

  it('should return value if it is neither null or undefined', () => {
    const result = pipe.transform('Hello');
    expect(result).toBe('Hello');
  });
});
