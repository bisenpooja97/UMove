import {Document} from './document';
export class User {
  [x: string]: any;
    public id: string;
    public name: string;
    public mobileNumber: string;
    public email: string;
    public role: string;
    public userStatus: string;
    public document: Document;
}
