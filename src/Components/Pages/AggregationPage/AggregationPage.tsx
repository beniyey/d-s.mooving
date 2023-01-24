import { useEffect, useState } from "react";
import { categoriesObj } from "../../../assets/data";
import { CategoryModel } from "../../../Models/CategoryModel";
import CategoryCard from "../../DisplayOptions/CategoryCard/CategoryCard";
import "./AggregationPage.css";

function AggregationPage(): JSX.Element {

    const [items, setItems] = useState<CategoryModel[]>([])

    useEffect(() => {
        setItems(categoriesObj)
    }, [])

    return (
        <div className="AggregationPage">
            <div className="Aggregation-Categories">
                <div className="Aggregation-Categories-content">
                    {items.map((el, i) => <CategoryCard key={i} category={el} />)}
                </div>
            </div>
            <div className="Aggregation-side-banner">
                <div>
                    <span>OUR</span>
                    <br />
                    <span>PRICES</span>
                </div>
            </div>
        </div>
    );
}

export default AggregationPage;
