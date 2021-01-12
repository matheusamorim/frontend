import { useEffect, useState } from 'react'
import { fetchProducts } from '../api'
import { Product } from './types'
import ProductsList from './ProductsList'
import StepsHeaders from './StepsHeaders'
import './styles.css'

function  Orders(){
    const [products, setProducts] = useState<Product[]>([])
    useEffect(()=>{
        fetchProducts().then(response => setProducts(response.data))
        .catch(error =>console.log(error))
    }, []);

    return( 
     <div className="orders-container">
        <StepsHeaders />
        <ProductsList products={products} />
     </div>
    )
    
}

export default Orders;