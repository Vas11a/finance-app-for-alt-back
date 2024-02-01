import { HistoryElemType } from "types"

export const setHistoryObj = (g: number, w: number, isM: boolean, mData: string, wData: string) => {
    const resObj: HistoryElemType = {
        type: '',
        date: '',
        total: 0
    }
    if (isM) {
        resObj.type = 'Month'
        resObj.date = mData
        resObj.total = g
    } else {
        resObj.type = 'Week'
        resObj.date = wData
        resObj.total = w
    }
    return resObj
}

export const getDay = (dateString: string) => {
    let dateParts = dateString.split('.');
    let day = parseInt(dateParts[0], 10);
    let month = parseInt(dateParts[1], 10) - 1;
    let year = parseInt(dateParts[2], 10);
    let date = new Date(year, month, day);
    let dayOfWeek = date.getDay();
    let daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S'];
    let firstLetterOfDay = [
        daysOfWeek[dayOfWeek], 
        daysOfWeek[dayOfWeek + 1], 
        daysOfWeek[dayOfWeek + 2], 
        daysOfWeek[dayOfWeek + 3], 
        daysOfWeek[dayOfWeek + 4], 
        daysOfWeek[dayOfWeek + 5], 
        daysOfWeek[dayOfWeek + 6]
    ];
    return firstLetterOfDay
}
