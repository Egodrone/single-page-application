import React from "react";


class EditProduct extends React.Component {

    constructor(props) {
        super(props);

        console.log(props.location.state.contact);
        this.state = props.location.state.contact;
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.price === "" || this.state.id === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        this.props.updateProductHandler(this.state);
        this.setState({ name: "", price: "" });
        this.props.history.push("/");
    };

    render() {
        return (
            <div className="main">
                <h2>Edit Product</h2>
                <form className="form" onSubmit={this.update}>
                    <div className="field">
                        <label> Id </label>
                        <input
                            type="text"
                            name="id"
                            placeholder="Id"
                            value={this.state.id}
                            onChange={(e) => this.setState({ id: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label> Name </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>

                    <div className="field">
                        <label> Price </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={this.state.price}
                            onChange={(e) => this.setState({ price: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label> Details Id </label>
                        <input
                            type="text"
                            name="productDetails.id"
                            placeholder="Details id"
                            value={this.state.productDetails.id}
                            onChange={(e) => this.setState({
                                productDetails: {
                                    ...this.state.productDetails,
                                    id: e.target.value
                                },
                            })}
                        />
                    </div>
                    <div className="field">
                        <label> Description </label>
                        <input
                            type="text"
                            name="productDetails.description"
                            placeholder="Description"
                            value={this.state.productDetails.description}
                            onChange={(e) => this.setState({
                                productDetails: {
                                    ...this.state.productDetails,
                                    description: e.target.value
                                },
                            })}
                        />
                    </div>
                    <div className="field">
                        <label> Category Id </label>
                        <input
                            type="text"
                            name="category.id"
                            placeholder="Category id"
                            value={this.state.category.id}
                            onChange={(e) => this.setState({
                                category: {
                                    ...this.state.category,
                                    id: e.target.value
                                },
                            })}
                        />
                    </div>

                    <button className="ui button"> Update </button>
                </form>
            </div>
        );
    }
}


export default EditProduct;
