import React from "react";


class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        const { id, name, price } = props.location.state.contact;
        this.state = {
            id,
            name,
            price
        };
    }

    update = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.price === "") {
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

                    <button className="ui button"> Update </button>
                </form>
            </div>
        );
    }
}


export default EditProduct;
