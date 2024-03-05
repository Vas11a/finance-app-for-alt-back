import $api from "../http/index";

export default class SettingsService {
    static async changeUserName(id: number, username: string): Promise<any> {
        return $api.post('changeName', { id, username })
    }

    static async sendLetter(email: string, question: string): Promise<any> {
        return $api.post('contact', { email, question })
    }

    static async deleteAccount(id: number): Promise<any> {
        return $api.post('deleteAccount', { id })
    }

}