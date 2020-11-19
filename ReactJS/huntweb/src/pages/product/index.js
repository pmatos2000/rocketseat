import React, { Component } from "react";

import api from "../../services/api"

class Product extends Component {

    
    
    state = {
        product: {},
    };
          
    componentDidMount(){
        this.loadProduct();
    }


    loadProduct = async () => {
        const  { id } = this.props.match.params; 
        console.log(this.props);
        const response = await api.get(`/products/${id}`);
        console.log(response.data);
        this.setState({ product: response.data });
    };


    

    render(){

        const { product } = this.state;


        return(
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
            </div>
        );
    }

    

}

export default Product;