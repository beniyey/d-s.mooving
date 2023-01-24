import { ItemModel } from "../../../Models/ItemModel";
import "./ItemCard.css";

function ItemCard({props}:{props:ItemModel}): JSX.Element {
    return (
        <div className="ItemCard">
            <img src={props.imgUrl} alt={"a "+props.name}/>
            <p>שם : {props.name}</p>
            <p>מחיר : {props.price}</p>
            <p>תיאור : {props.description}</p>
            <p>סוג : {props.type}</p>
            <select name="" id="">
                <option value="">גודל</option>
            </select>
            <p>קטגוריה : {props.category}</p>
            <button></button>
        </div>
    );
}

export default ItemCard;
