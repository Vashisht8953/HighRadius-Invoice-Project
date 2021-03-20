const changeSelected = (selected = [], action) => {
    if(action.type === 'SELECT_ROW') {
        return [...selected, action.payload.invoiceNumber];
    }
    else if(action.type === 'DESELECT_ROW') {
        return selected.filter(invoiceNumber => invoiceNumber != action.payload.invoiceNumber);
    }
    return selected;
}

export default changeSelected;