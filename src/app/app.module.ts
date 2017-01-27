import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
    RouterModule,
    Router,
    Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProtectedComponent } from './protected/protected.component';

/*
 * Services
 */
import { AUTH_PROVIDERS } from './services/auth.service';
import { LoggedInGuard } from './guards/loggedin.guard';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: 'protected', component: ProtectedComponent,
        canActivate: [LoggedInGuard]
    }
];

@NgModule( {
    declarations: [
        AppComponent,
        LoginComponent,
        AboutComponent,
        ContactComponent,
        HomeComponent,
        ProtectedComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot( routes ) // <-- routes
    ],
    providers: [
        AUTH_PROVIDERS,
        LoggedInGuard,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
