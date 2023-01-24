import { Box, Button, Modal, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { itemsObj } from "../../../assets/data";
import { CategoryModel } from "../../../Models/CategoryModel";
import { ItemModel } from "../../../Models/ItemModel";
import ItemCard from "../ItemCard/ItemCard";
import "./CategoryCard.css";

interface CategoryProps {
    category: CategoryModel;
}

function CategoryCard(props: CategoryProps): JSX.Element {

    const [open, setOpen] = useState<boolean>(false)
    const [items, setItems] = useState<ItemModel[]>([])

    const styleInner = {
       display: "flex",
       flexDirection: "row" as "row",
    };

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        overflow: "scroll",
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "auto",
        maxWidth:"90%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    function openItemsWindow(e: SyntheticEvent) {
        let curItemsObj:ItemModel[] = itemsObj.filter(el=> el.category === props.category.name)
        setItems(curItemsObj)
        setOpen(true)
    }

    return (
        <div  className="CategoryCard">
            <p onClick={openItemsWindow}>{props.category.name}</p>
            <Modal
                open={open}
                onClose={()=>setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography sx={styleInner} id="modal-modal-title" variant="h6" component="h2">
                        {items.map((el: ItemModel, i:number) => <ItemCard key={i} props={el} />)}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default CategoryCard;
