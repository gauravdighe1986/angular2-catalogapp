import {ExceptionHandler} from "@angular/core"; 
 
import {Router} from "@angular/router";

export class AppExceptionHandler extends ExceptionHandler { 
     
    call(exception: any, stackTrace?: any, reason?: string) : void {
        console.log("application exception handler ");

        //TODO: Investigate, how angular 2 send 'reason', undocumented

        console.log('exception ', exception);
        console.log('stackTrace ', stackTrace);
        
         
        let errorDetail = {
            'message': JSON.stringify(exception, ["message", "arguments", "type", "name"]),
            'stackTrace' : stackTrace, 
            'reason' : reason
        }

        //TODO: send this error to server
        window.sessionStorage.setItem('__error__', JSON.stringify(errorDetail));

        window.location.assign("error"); 

        //FIXME: Get Router if feasible, could not find in angular documentation
    }
}