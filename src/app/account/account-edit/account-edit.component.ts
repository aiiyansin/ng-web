import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit{
    id:number;
    editMode = false;
    accountForm: FormGroup;

    constructor(private route: ActivatedRoute, private accountService: AccountService){}
    ngOnInit(){
        this.route.params
            .subscribe(
                (params:Params) => {
                    this.id = +params['id'];
                    this.editMode = params['id'] != null;
                    this.initForm();
                }
            );

    }
    onSubmit(){
        console.log(this.accountForm);
        
    }
    private initForm(){
        let accounttitle = '';
        let accountname = '';
        let accountphone = '';
        let accountbirthday = '';
        let accountoccupation = '';

        if(this.editMode){
            const account = this.accountService.getAccount(this.id);
            accounttitle = account.title;
            accountname = account.name;
            accountphone = account.phone;
            accountbirthday = account.birthday; 
            accountoccupation = account.birthday  
         }
        this.accountForm = new FormGroup({
            'title': new FormControl(accounttitle),
            'name': new FormControl(accountname),
            'phone': new FormControl(accountphone),
            'birthday': new FormControl(accountbirthday),
            'occupation': new FormControl(accountoccupation),
        });
    }
}