import IComponent from "../IComponent";
import { IScore, IRanking } from "../../serverThings/ranking";
import { BaseGameTypeNames } from "../../logic/gameTypes";

class Row implements IComponent{
    private element: HTMLDivElement;
    private place: string;

    public constructor(place: number){
        this.place = place.toString();
        this.element = document.createElement("DIV") as HTMLDivElement;
        this.element.innerText = this.place;
    }

    public Set(score: IScore){
        const time = (Math.round(score.time/100)/10).toString();
        this.element.innerText = this.place + ". " + score.nick + "  " + time;
    }

    public GetComponent(){
        return this.element;
    }
}

class Header implements IComponent{
    private element: HTMLDivElement;
    private name: string;

    public constructor(name: string){
        this.name = name;
        this.InitializeElement();

    }

    private InitializeElement(){
        this.element = document.createElement("DIV") as HTMLDivElement;
        this.element.innerText = this.name;
    }

    public GetComponent(){
        return this.element;
    }
}

class RankingElement implements IComponent{
    private element: HTMLDivElement;
    private rows: Row[];
    private header: Header;
    private numberOfRows: number;
    private gameTypeName: BaseGameTypeNames;

    public constructor(gameTypeName: BaseGameTypeNames){
        this.numberOfRows = 5;
        this.gameTypeName = gameTypeName;
        this.InitializeHeader();
        this.InitializeRows();
        this.InitializeElement();
    }

    private InitializeHeader(){
        let name: string;
        switch(this.gameTypeName){
            case BaseGameTypeNames.beginner:
                name = "Beginner";
                break;
            case BaseGameTypeNames.intermediate:
                name = "Intermediate";
                break;
            case BaseGameTypeNames.expert:
                name = "Expert";
                break;

        }
        this.header = new Header(name);
    }

    private InitializeRows(){
        this.rows = new Array<Row>(this.numberOfRows);
        for(let i = 0; i < this.numberOfRows; i++)
        {
            this.rows[i] = new Row(i+1);
        }
    }

    private InitializeElement(){
        this.element = document.createElement("DIV") as HTMLDivElement;
        this.element.classList.add("RankingElement");
        this.element.appendChild(this.header.GetComponent());
        this.rows.forEach(row => {
            this.element.appendChild(row.GetComponent());
        });
    }

    public Set(ranking: IRanking){
        for(let i = 0;  i < ranking.array.length; i++){
            this.rows[i].Set(ranking.array[i]);
        }
    }

    public GetComponent(){
        return this.element;
    }
}

export default class RankingContainer implements IComponent{
    private element: HTMLDivElement;
    public readonly rankings: RankingElement[];

    public constructor(){
        this.rankings = new Array<RankingElement>(3);
        for(let i = 0 ; i < 3; i++)
        {
            this.rankings[i] = new RankingElement(i);
        }
        this.InitializeElement();
    }

    public Set(ranking: IRanking){
        this.rankings[ranking.gameTypeName].Set(ranking);
    }

    private InitializeElement(){
        this.element = document.createElement('DIV') as HTMLDivElement;
        this.rankings.forEach(rankingElement => {
            this.element.appendChild(rankingElement.GetComponent());
        });
    }
    
    public GetComponent(){
        return this.element;
    }
}