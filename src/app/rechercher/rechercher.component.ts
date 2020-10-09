import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { FilmsProvider } from '../providers/film.provider';

@Component({
    selector: 'app-rechercher',
    templateUrl: './rechercher.component.html',
    styleUrls:['./rechercher.component.scss'],
})

export class RechercherComponent implements OnInit{
    public binding : string = 'Bonjour les gens';
    public title : string = '';
    public year : number;
    public type : string = '';
    public films = [];
    constructor(private alertCtrl : AlertController, private rechercherFilms : FilmsProvider) {

    }

    ngOnInit(){}

    clicBouton(){
        this.binding = 'Clic!';
    }

    public error : string = "";
    //verification sur les champs
    public async rechercher(){
        this.error = '';
        if(!this.title || this.title.length <= 3){
            this.error="veuillez saisir un titre de plus 3 caractères";
            const alert = await this.alertCtrl.create({
                header : 'infos manquantes',
                message : "veuillez saisir un titre de plus 3 caractères"
            });
            alert.present();
            return;
        }
        if(!this.year || (this.year < 1900 || this.year > 2050)){
            this.error="veuillez saisir une année entre 1900 et 2050";
            return;
        }
        if(this.type === undefined){
            this.error="Veuillez choisir un type de media";
            return;
        }
        this.lancerRecherche();

    }//fin fonction rechercher

    private lancerRecherche(){
       this.rechercherFilms.search(this.title, this.year, this.type)
       .then((resultat)=> {
           this.films = resultat;
       })
       .catch(async (err)=>{
            const alert = await this.alertCtrl.create({
                    header : 'Erreur appel Service',
                    message: 'Impossible de récuperer les films',
                    buttons : ['OK']
            });
            alert.present();
       });
    }


}