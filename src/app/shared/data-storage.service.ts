import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from '../account/account.service';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService{

    constructor(private http: HttpClient,
                private accountservice:AccountService,
                private authservice: AuthService){}

    storeAccount(){
        const accounts = this.accountservice.getAccounts();
        this.http
            .put(
                `https://my-web-app-b6ffe.firebaseio.com/accounts.json`,
                accounts
            )
            .subscribe(response => {
                console.log(response);
                
            });
            
    }

}