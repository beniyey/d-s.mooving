export class ItemModel{
    name:string;
    type:string;
    size:string;
    price:number;
    imgUrl:string;
    description:string;
    category:string;
    
    constructor(name:string, type:string, size:string, price:number, imgUrl:string, description:string, category:string){
        this.name = name;
        this.type = type;
        this.size = size;
        this.price = price;
        this.imgUrl = imgUrl;
        this.description = description;
        this.category = category;
    }
}