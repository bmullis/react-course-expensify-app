import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

// TEST FOR SET_START_DATE ACTION
test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    });
});

// TEST FOR SET_END_DATE ACTION
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    });
});

// TEST FOR SET_TEXT_FILTER ACTION WITH NO PROVIDED TEXT
test('should generate set text filter action object without provided text', () => {
    const action = setTextFilter('');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

// TEST FOR SET_TEXT_FILTER ACTION WITH PROVIDED TEXT
test('should generate set text filter action object with provided text', () => {
    const text = 'Some input';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

// TEST FOR SORT_BY_AMOUNT ACTION
test('should generate sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({ type: 'SORT_BY_AMOUNT' });
});

// TEST FOR SORT_BY_DATE ACTION
test('should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({ type: 'SORT_BY_DATE' });
});