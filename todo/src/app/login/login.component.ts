import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username = 'musili';
    password = '1234';
    errorMessage = false;
    invalidLogin = true;
    // Router
    // Angular .give me router
    // Dependecny Injection

    constructor(private router: Router, private hardcodedAuthentication: HardcodedAuthenticationService) {
    }

    ngOnInit() {
    }

    handlelogin() {
        if (this.hardcodedAuthentication.authenticate(this.username, this.password)) {
            this.errorMessage = false;
            this.router.navigate(['welcome', this.username ]);
            this.invalidLogin = false;
          //  console.log('welcome ' + this.username);
        } else {
            this.errorMessage = true;
            this.invalidLogin = true ;
        }
    }

}
