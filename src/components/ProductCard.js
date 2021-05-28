import React from "react";
import { Link } from "react-router-dom";
import product from "../images/product.png";


const ProductCard = (props) => {

    const { id, name, price } = props.contact;

    return (
        <div className="item">
            <img style={{width: "50px"}} className="avatar image" src={product} alt="product" />
            <div className="content">
                <Link
                    to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}
                >
                    <div className="header font-weight-bold"> {name} </div>
                </Link>
                <div className="no-underline"> <label className="font-weight-bold">{price}</label> USD</div>

            </div>

            <i
                className="trash outline icon"
                style={{color: "red", marginTop: "-30px", marginLeft: "10px" }}
                onClick={() => props.clickHander(id)}
            ></i>

            <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
                <i
                    className="edit alternate outline icon"
                    style={{ color: "blue", marginTop: "-70px" }}
                ></i>
            </Link>
        </div>
    );
};


export default ProductCard;
