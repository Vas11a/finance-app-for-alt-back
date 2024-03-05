import $api from "../http/index";

export default class MainService {
    static async clearHistory(userId:number): Promise<any> {
        return $api.post('clearHistory', { userId })
    }

    static async removeOneHistoryElem(userId:number, data:any): Promise<any> {
        return $api.post('removeOneHistoryElem', { userId, data })
    }

    static async addElemToHistory(data: any, userId: number): Promise<any> {
        return $api.post('addToHistory', { data, userId })
    }
    static async updateCalendar(calendar: any, userId: number) : Promise<any> {
        return $api.post('updateCalendar', { calendar, userId })
    }
}