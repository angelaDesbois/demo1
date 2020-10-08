import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../models/film';
@Injectable()
export class FilmsProvider{

    constructor(private http: HttpClient){}

    public search(title: string, year : number, type: string):
    Promise<Array<Film>> {
        return new Promise(async (resolve, reject)=>{
            try{
                let params = new HttpParams();
                params = params.append('apikey', '1898fc97');
                params = params.append('s', title);
                if(year){
                    params = params.append('y', String(year));
                }
                if(type && type !== ''){
                    params = params.append('type', type);
                }
                const response = await this.http.get('http://www.omdbapi.com', {params: params}).toPromise();
                console.log(response);
                if(response && response['Search']){
                    resolve(response['Search']);
                }else{
                    reject('impossible de comprendre la réponse du serveur');
                }
               
            }catch (err){
                console.log("impossible de recup", err);
                reject("impossible de recup la recherche");
            }
          

        });

    }

}