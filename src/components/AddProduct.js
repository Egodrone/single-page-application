import React from "react";


class AddProduct extends React.Component {

    state = {
        name: "",
        price: "",
        productDetails: {
            id: "",
            description: "",
            imageUrl: ""
        },
        category: {
            id: ""
        }
    }


    add = (e) => {
        e.preventDefault();
        alert(this.state.productDetails.description);
        //console.log(description);
        /*
        if (this.state.name === "" || this.state.price === "" || this.state.productDetails.description) {
            alert("You need to fill out all of the fields!");
            return;
        }*/
        this.props.addProductHandler(this.state);
        this.setState({ name: "", price: "", productDetails: { ...this.state.productDetails, description: ""}});
        this.props.history.push("/");
    };


    handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log("--------------------")
        console.log(name);
        console.log(value);
        let cat;

        if (name === "productDetails.description"){
            cat = {...this.state, [name]: value};
            console.log("If statement --->>> ", cat)
        }

        console.log("--------------------")
        const product = {...this.state, [name]: value};
        console.log(product);
        this.setState(product);
    }


    render() {
        return (
            <div className="main">
                <h2> Add Product </h2>

                <form className="form" onSubmit={this.add}>
                    <div className="field">
                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            value={this.state.name}
                            onChange = {this.handleChange}
                        />
                    </div>

                    <div className="field">
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={this.state.price}
                            onChange = {this.handleChange}
                        />
                    </div>

                    <div className="field">
                        <input
                            type="text"
                            name = "productDetails.description"
                            placeholder="Description"
                            value={this.state.productDetails.description}
                            onChange = {this.handleChange}
                        />
                    </div>

                    <div className="field">
                        <input
                            type="number"
                            name="category.id"
                            placeholder="category"
                            value={this.state.category.id}
                            onChange = {this.handleChange}
                        />
                    </div>

                    <button className="button float-right"> Add </button>
                </form>
            </div>
        );
    }


}


export default AddProduct;
