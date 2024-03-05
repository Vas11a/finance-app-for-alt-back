import $api from "../http/index";

export default class AuthService {
    static async login(email:string, password:string): Promise<any> {
        return $api.post('login', {email, password})
    }

    static async sendEmail(email:string): Promise<any> {
        return $api.post('sendEmail', {email})
    }

    static async createUser(email:string, password:string, username:string): Promise<any> {
        return $api.post('createUser', {email, password, username})
    }

    static async updatePass(email:string, password:string): Promise<any> {
        return $api.post('savePassword', {email, password})
    }

    static async changePass (email: string, password:string): Promise<any> {
        return $api.post('changePassword', {email, password})
    }

}