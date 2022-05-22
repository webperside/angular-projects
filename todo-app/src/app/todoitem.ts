export class ToDoItem{

    id: number;
    desc: string;
    action: boolean;

    constructor(id: number, desc: string, action: boolean){
        this.id = id;
        this.desc = desc;
        this.action = action;
    }
}