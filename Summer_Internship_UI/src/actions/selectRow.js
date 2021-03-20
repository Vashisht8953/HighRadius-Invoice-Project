const selectRow = (invoiceNumber) => ({
    type: 'SELECT_ROW',
    payload: {
        invoiceNumber: invoiceNumber,
    }
})

export default selectRow;