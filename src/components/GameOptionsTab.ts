import IComponent from "./IComponent";

export default class GameOptionsTab implements IComponent{
    private element: HTMLDivElement;
    
    public constructor(){
        this.element = document.createElement('DIV') as HTMLDivElement;
        this.element.appendChild(this.GetTable());
    }

    private GetTable(){
        const table = document.createElement('TABLE') as HTMLTableElement;
        table.classList.add('OptionsTab');

        const head = table.insertRow(0);
        head.classList.add('OptionsTabHead');
        head.insertCell(0)
        const headCell1 = head.insertCell(1);
        headCell1.innerText = 'Width';
        const headCell2 = head.insertCell(2);
        headCell2.innerText = 'Height';
        const headCell3 = head.insertCell(3);
        headCell3.innerText = 'Bombs';

        const row1 = table.insertRow(1);
        const row1Cell0 = row1.insertCell(0);
        var row1Radio = document.createElement("INPUT") as HTMLInputElement;
        row1Radio.setAttribute("type", "radio");
        row1Radio.name = 'gameType';
        row1Cell0.appendChild(row1Radio);
        const row1Cell1 = row1.insertCell(1);
        row1Cell1.innerText = '8';
        const row1Cell2 = row1.insertCell(2);
        row1Cell2.innerText = '8';
        const row1Cell3 = row1.insertCell(3);
        row1Cell3.innerText = '10';

        const row2 = table.insertRow(2);
        const row2Cell0 = row2.insertCell(0);
        var row2Radio = document.createElement("INPUT") as HTMLInputElement;
        row2Radio.setAttribute("type", "radio");
        row2Radio.name = 'gameType';
        row2Cell0.appendChild(row2Radio);
        const row2Cell1 = row2.insertCell(1);
        row2Cell1.innerText = '16';
        const row2Cell2 = row2.insertCell(2);
        row2Cell2.innerText = '16';
        const row2Cell3 = row2.insertCell(3);
        row2Cell3.innerText = '40';

        const row3 = table.insertRow(3);
        const row3Cell0 = row3.insertCell(0);
        var row3Radio = document.createElement("INPUT") as HTMLInputElement;
        row3Radio.setAttribute("type", "radio");
        row3Radio.name = 'gameType';
        row3Cell0.appendChild(row3Radio);
        const row3Cell1 = row3.insertCell(1);
        row3Cell1.innerText = '32';
        const row3Cell2 = row3.insertCell(2);
        row3Cell2.innerText = '16';
        const row3Cell3 = row3.insertCell(3);
        row3Cell3.innerText = '99';

        return table;
    }


    public GetComponent(){
        return this.element;
    }
}