export class Film{
    public Imdb : string;
    public Title : string;
    public Year : number;
    public Poster : string;

    public constructor(Imdb :string, Title: string, Year : number, Poster : string){
        this.Imdb = Imdb;
        this.Title = Title;
        this.Year = Year;
        this.Poster = Poster;
    }
}