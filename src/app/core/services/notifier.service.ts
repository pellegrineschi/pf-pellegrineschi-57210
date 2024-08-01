import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import Swal from 'sweetalert2'

@Injectable({providedIn:"root"})
export class notifierService{
    
    private notify$ = new Subject<string>()
    
    constructor(){
        this.notify$.subscribe({
            next: (txt)=>{
                Swal.fire(txt,'','info');
            }
        })
    }

    sendNotification(txt:string){
        this.notify$.next(txt);
    }
}