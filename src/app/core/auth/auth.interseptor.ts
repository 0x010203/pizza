import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterseptor implements HttpInterceptor {
    constructor(private  authService: AuthService){

    }
intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //срабатывает перед тем, как запрос будет отправлен на сервер
    // т.е. тут можно исправить запрос
    const authToken = this.authService.getToken();
    console.log(req);
    const  authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)
    });
    //стандартный код, который ничего не делает
    return next.handle(authReq)
    //чтобы что-то сделать с результатом запроса, используем преобразование через pipe
    .pipe(
        tap(
            {
                next: (event)=>{
                    if(event instanceof HttpResponse){
                        console.log(event);
                    }
                }
            }
        )
    );
}
}