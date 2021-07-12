import React from "react";
import CardImg from "../card-img/card-img";
import CardInfo from "../card-info/card-info";
import CardOrderBlock from "../card-order-block/card_order_block";

const Card = () => {
    return <main className="card" aria-label="Карточка товара">
        <div className="card__img">
            {<CardImg/>}
        </div>
        <div className="card__order-block">
            {<CardOrderBlock/>}
        </div>
        <div className="card__info">
            {<CardInfo/>}
        </div>
    </main>
};

export default Card;
