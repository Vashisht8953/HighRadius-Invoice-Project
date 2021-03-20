const data = (mainData = [], action) => {
    if(action.type === 'MAIN_DATA') {
        // console.log(mainData.length);
        // console.log(...action.payload.data);
        return [...mainData, ...action.payload.data];
    }
    return mainData;
}

export default data;