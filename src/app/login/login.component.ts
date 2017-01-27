import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    message: string;

    constructor( public authService: AuthService, public router: Router  ) {
        this.message = '';
    }

    ngOnInit() {
    }

    login( username: string, password: string ): boolean {
        this.message = '';
        if ( !this.authService.login( username, password ) ) {
            this.message = 'Incorrect credentials.';
            setTimeout( function() {
                this.message = '';
            }.bind( this ), 2500 );
        }
        return false;
    }

    logout(): boolean {
        this.authService.logout();
        this.router.navigate(['']);
        return false;
    }

}
