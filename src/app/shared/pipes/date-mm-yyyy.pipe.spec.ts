import { DateMmYyyyPipe } from './date-mm-yyyy.pipe';

describe('DateMmYyyyPipe', () => {
  let pipe: DateMmYyyyPipe;

  beforeEach(() => {
    pipe = new DateMmYyyyPipe();
  });

  it('should transform a Date object to MM/YYYY', () => {
    const date = new Date(2024, 11, 3);
    expect(pipe.transform(date)).toBe('12/2024');
  });

  it('should transform a date string to MM/YYYY', () => {
    const dateStr = '2024-12-03T00:00:00Z';
    expect(pipe.transform(dateStr)).toBe('12/2024');
  });

  it('should return an empty string for null or undefined', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });

  it('should return an empty string for invalid dates', () => {
    expect(pipe.transform('invalid date')).toBe('');
  });

  it('should handle dates in the beginning of the year', () => {
    const date = new Date(2024, 0, 15);
    expect(pipe.transform(date)).toBe('01/2024');
  });
});
