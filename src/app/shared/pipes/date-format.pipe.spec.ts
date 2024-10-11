import { DateFormatPipe } from './date-format.pipe';

describe('DateFormatPipe', () => {
  let pipe: DateFormatPipe;

  beforeEach(() => {
    pipe = new DateFormatPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format "1996-07-20" as "20.07.1996"', () => {
    const result = pipe.transform('1996-07-20');
    expect(result).toBe('20.07.1996');
  });

  it('should format "2023-01-05" as "05.01.2023"', () => {
    const result = pipe.transform('2023-01-05');
    expect(result).toBe('05.01.2023');
  });

  it('should return "-" for undefined input', () => {
    const result = pipe.transform(undefined);
    expect(result).toBe('-');
  });
});

