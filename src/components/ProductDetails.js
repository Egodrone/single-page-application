import React from "react";
import { Link } from "react-router-dom";
import oca from "../images/oca.jpg";


const ProductDetail = (props) => {
    const { name, price, description } = props.location.state.contact;
    console.log(props.location.state.contact);
    console.log(props.location.state.contact.id);
    console.log(name);
    console.log(price);
    console.log(description);
    console.log(props.location.state.contact.category.id);
    console.log(props.location.state.contact.productDetails.id);
    console.log(props.location.state.contact.productDetails.imageUrl);


    return (
        <div className="main">
            <div className="card centered">
                <div className="image img-m1">
                    <img src={oca} alt="oca" />
                </div>
                <div className="content">
                    <div className="header"><label className="font-weight-bold">Name: </label> {name}</div>
                    <div className="description"> <label className="font-weight-bold">Price:</label> {price} USD</div>
                    <div className="description"><label className="font-weight-bold">Category id:</label> {props.location.state.contact.category.id} </div>
                    <div className="description"><label className="font-weight-bold"> Description:</label> {props.location.state.contact.productDetails.description} </div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                    <button className="button btn btn-primary center">
                        Back to the product list
                    </button>
                </Link>
            </div>
        </div>
    );
};


export default ProductDetail;
