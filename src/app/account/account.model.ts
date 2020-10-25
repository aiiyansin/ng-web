export class Account{
    public title:string;
    public name:string;
    public phone : string;
    public birthday : string;
    public occupation : string;

    constructor(title:string, name : string, phone:string, birthday:string, occupation: string){
        this.title = title;
        this.name = name;
        this.phone = phone;
        this.birthday = birthday;
        this.occupation = occupation;
        
    }
}