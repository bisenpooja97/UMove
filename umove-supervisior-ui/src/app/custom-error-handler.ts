import {ErrorHandler, Injector} from '@angular/core';
import {Router} from '@angular/router';

export class CustomerErrorHandler implements ErrorHandler {

    private get _router() { return this._injector.get(Router); }

    constructor(private _injector: Injector) {
    }

    handleError(err: any): void {
        // do something with the error
        console.log(err);
        this._router.navigateByUrl('error');
    }
}
