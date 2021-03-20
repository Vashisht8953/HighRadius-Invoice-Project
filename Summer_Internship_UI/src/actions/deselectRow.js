const deselectRow = (invoiceNumber) => ({
    type: 'DESELECT_ROW',
    payload: {
        invoiceNumber: invoiceNumber,
    }
})

export default deselectRow;