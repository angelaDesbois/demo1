import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable()
export class FilmsProvider{
    public search(title: string, year : number, type: string):
    Promise<Array<Film>> {
        return new Promise((resolve, reject)=>{
            resolve([
                {
                    Title : 'gdhdjf',
                    Poster : 'assets/icon/favicon.png',
                    Year:2012
                },
                {
                    Title : 'gdhdgggggjf',
                    Poster : 'assets/icon/favicon.png',
                    Year:2014
                },
                {
                    Title : 'gdhdftsssssfffjf',
                    Poster : 'assets/icon/favicon.png',
                    Year:2019
                }
            ]);

        });

    }

}