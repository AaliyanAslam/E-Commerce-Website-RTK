import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../config/redux/reducers/productsSlice'
import Card from '../components/Cards'
import  {addToCarts}  from "../config/redux/reducers/cartSlice"

const Products = () => {
    const dispatch = useDispatch()
    // const dispatch2 = useDispatch()
    
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])
    const { data, isLoading, isError } = useSelector((state) => state.product);

    console.log("Products:", data);
      // const dispatch1 = useDispatch();
    
      const handleAddToCart = (product) => {
        dispatch(addToCarts(product));
        return (
          <div className="fixed bottom-0 right-0 m-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
            Item added to cart!
            {console.log("added")
            }
          </div>
        )
      };
 

    if (isLoading) {
        return (
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            {Array(10).fill(0).map((_, index) => (
              <div key={index} className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            ))}
          </div>
        );
      }
      
    
    if(isError) {
        return <div>Error</div>
    }



  return (
    <>
    
<div className='flex flex-wrap gap-3 justify-center mt-4'>

    {data && data.products.map((product, index) => {
        return(
            <div key={product.id} >
<Card image={product.thumbnail} price={product.price} description={product.description} id={product.id} title ={product.title} add = {()=>{handleAddToCart(product)}}/>


            </div>

        )
    })}
</div>
   

 
    </>
  )
}

export default Products