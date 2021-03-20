const updateMainData = (...data) => ({
    type: 'MAIN_DATA',
    payload: {
        data: data
    }   
})

export default updateMainData;