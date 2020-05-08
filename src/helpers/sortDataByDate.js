import convertDate from './convertDate';

const sortedByDate = data => data && data.length > 1
    ? data.sort((a, b) => convertDate(a.date) - convertDate(b.date))
    : data;

export default sortedByDate;

