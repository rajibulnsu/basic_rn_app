import convertDate from './convertDate';

describe('convertDate', () => {
  it('should convert string to standard date', () => {
    const sampleDate = '01.02.2019';
    const expectDate = new Date('2019-02-01');

    const result = convertDate(sampleDate);

    expect(result).toEqual(expectDate);
  });
});
