import { RoundPipe } from './round.pipe';

describe('RoundPipe', () => {

  let pipe: RoundPipe;

  beforeEach(() => {
    pipe = new RoundPipe();
  });

  it('округляет до двух знаков по умолчанию', () => {
    const result = pipe.transform(3.14159);
    expect(result).toBe('3.14');
  });

  it('округляет до указанного числа знаков', () => {
    const result = pipe.transform(3.14159, 4);
    expect(result).toBe('3.1416');
  });

  it('возвращает Invalid number для NaN', () => {
    const result = pipe.transform(NaN);
    expect(result).toBe('Invalid number');
  });

  it('работает с отрицательными числами', () => {
    const result = pipe.transform(-3.14159, 3);
    expect(result).toBe('-3.142');
  });

  it('работает с целыми числами', () => {
    const result = pipe.transform(10);
    expect(result).toBe('10.00');
  });
});
