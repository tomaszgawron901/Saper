import './main.scss';
import Cell from './components/Cell';


const c = new Cell(5);
c.AddOnClickListener(()=>{console.log("click");
});
document.body.appendChild(c.GetComponent());
