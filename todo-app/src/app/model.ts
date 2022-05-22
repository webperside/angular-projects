import { ToDoItem } from './todoitem';

export class Model {

    private name: string;
    private items: ToDoItem[];

    constructor(name:string){
        this.name = name;
        let dataItems:any = localStorage.getItem(this.getLSKeyword());
        this.items = dataItems != null ? JSON.parse(dataItems) : [];
    }

    private getLSKeyword(){
        return this.name.toLowerCase()+"Items";
    }

    getName() {
        return this.name;
    }

    getItems() {
        return this.items;
    }

    addItemToLS(item:ToDoItem){
        this.items.push(item);
        this.updateItemInLs();
    }

    updateItemInLs(){
        localStorage.setItem(this.getLSKeyword(),JSON.stringify(this.items))
    }

}