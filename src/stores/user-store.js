import {extendObservable} from 'mobx';

class UserStore {
    constructor() {
        extendObservable(this, {
            user: {
                name: undefined
            },
            isLogged() {
                return this.user.name !== undefined
            }
        })
    }
}

export default new UserStore();
export const USER_STORE = 'userStore';