import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HardcodedAuthenticationService {

    constructor() {
    }

    authenticate(username, password) {
        // console.log('Before : ' + this.isUserLoggedIn());
        if (username === 'musili' && password === '1234') {
            sessionStorage.setItem('authenticatedUser', username);
          //  console.log('After : ' + this.isUserLoggedIn());
            return true;
        }
        return false;
    }

    isUserLoggedIn() {
        const user = sessionStorage.getItem('authenticatedUser');

        return !(user === null);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }
}
