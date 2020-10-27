import {Option} from "../models/option";

export class Question {
    public id: number;
    public text: string;
    public options?:Array<Option>;
    public selectedOption:Option;
 
    constructor() {
        this.options=new Array<Option>();
    }
}