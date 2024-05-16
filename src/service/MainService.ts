import $api from "../http/index";

export default class MainService {
    static async clearHistory(userId:number): Promise<any> {
        return $api.post('clearHistory', { userId })
    }

    static async removeOneHistoryElem(userId:number, idx:number): Promise<any> {
        console.log({ userId, index: idx });
        
        return $api.post('removeOneHistoryElem', { userId, index: idx })
    }

    static async addElemToHistory(data: any, userId: number): Promise<any> {
        let sendData = JSON.parse(JSON.stringify(data))
        sendData.id = userId
        console.log(sendData);
        return $api.post('addToHistory', sendData)
    }
    static async updateCalendar(calendar: any, userId: number) : Promise<any> {;
        
        return $api.post('updateCalendar', { calendar, id:+userId })
    }
}