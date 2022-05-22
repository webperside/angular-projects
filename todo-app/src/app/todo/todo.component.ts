import { Component, OnInit } from '@angular/core';
import { Model } from '../model';
import { ToDoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent{

  constructor() { }

  private model : Model = new Model("Hamid");
  displayAll : boolean = false;
  inputText: string = '';

  getModel(){
    return this.model;
  }

  private getItemsCore(){
    return this.model.getItems();
  }

  getItems(){
    if(this.displayAll) return this.getItemsCore();
    else return this.getItemsCore().filter(it => it.action == false);
  }

  addItem(){
    if(this.inputText!=""){
      const index: number = this.getItemsCore().length + 1;
      this.getItemsCore().push(new ToDoItem(index, this.inputText, false));
      localStorage.setItem(this.model.getName().toLowerCase()+"Items",JSON.stringify(this.getItemsCore()));
      return true;
    }
    return false;
  }

  addItemAndClearInput(){
    if(this.addItem()) this.inputText = "";
    else alert("Description is empty");
  }

  getDoneItemsCount(){
    return this.getItemsCore().filter(it => it.action).length;
  }

  changeItemStatus(){
    this.model.updateItemInLs();
  }
}
