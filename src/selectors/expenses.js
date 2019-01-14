import moment from 'moment';

// GET VISIBLE EXPENSES

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') : false;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

export default getVisibleExpenses;