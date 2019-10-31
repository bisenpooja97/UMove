import {Document} from './document';

export class UserProfile {
    id: string;
    name: string;
    mobileNumber: string;
    email: string;
    roles: [string];
    userStatus: string;
    document: Document;
}
