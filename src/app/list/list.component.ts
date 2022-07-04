import { Component, OnInit } from '@angular/core';
import{todo} from '../../../../todo/src/app/list/todo'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})


export class ListComponent implements OnInit {
  title = "My To do List"
  list:todo[] =[];
  newtodo: string | undefined ="";
 
  constructor() { }

  ngOnInit(): void {
    this.list = [{title:'',content:'first',completed:true},{title:'',content:'second',completed:false}]
  }


  deletetodo(id:number){
    this.list = this.list.filter((v,i) => i !==id);
  }
  
  savetodo(){
    if(this.list){
      let Todo = new todo();
      Todo.title =this.newtodo;
      Todo.completed= true;
      this.list.push(Todo);
      this.newtodo ='';
   }
    else{
      alert("enter todo");
    }
  }
}
