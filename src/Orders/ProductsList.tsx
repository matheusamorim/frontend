import { Product } from "./types";
import ProductCard from "./ProductCard";

type Props = {
    products: Product[];
}


function  ProductsList({products}:Props){

    return( 
        <div className="orders-list-container">
            <div className="orders-list-items">
             {products.map(products =>(
                 <ProductCard key={products.id} product={products}/>
             )) }
           
            </div>               
        </div>
    )
    
}

export default ProductsList;