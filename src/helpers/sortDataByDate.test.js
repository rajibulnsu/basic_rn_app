import sortDataByDate from './sortDataByDate';

describe('sortDataByDate', () => {
    it('should return same data that is passed, when there is only one element', () => {
        const data = { date: '01.02.2019' };

        const result = sortDataByDate(data);

        expect(result).toEqual(data);
    });

    it('should return sorted data by ascending date when there is multiple element passed', () => {
        const data = [
            { date: '01.03.2019' },
            { date: '01.02.2019' },
            { date: '01.01.2019' },
        ];
        const dataSmallestDate = data[2].date;

        const result = sortDataByDate(data);

        expect(result[0].date).toEqual(dataSmallestDate);
    });
});
