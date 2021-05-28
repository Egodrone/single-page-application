import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";


const ProductList = (props) => {
    //console.log(props);

    const deleteProductHandler = (id) => {
        props.getContactId(id);
    };

    const renderProductList = props.contacts.map((contact) => {
        return (
            <ProductCard
                contact={contact}
                clickHander={deleteProductHandler}
                key={contact.id}
            />
        );
    });

    return (
        <div className="main mar-2">
            <h2>
                Product List
                <Link to="/add">
                    <button className="button mar-btn"> Add Product </button>
                </Link>
            </h2>
            <div className="celled list">{renderProductList}</div>
        </div>
    );
};


export default ProductList;
