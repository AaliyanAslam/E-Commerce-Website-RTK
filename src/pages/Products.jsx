import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../config/redux/reducers/productsSlice'
import Card from '../components/Cards'

const Products = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])
    const { data, isLoading, isError } = useSelector((state) => state.product);

    console.log("Products:", data);

    if(isLoading) {
        return <div>Loading...</div>
    }
    if(isError) {
        return <div>Error</div>
    }

  return (
    <>
    
<div className='flex flex-wrap gap-3 justify-center'>

    {data && data.products.map((product) => {
        return(
            <div key={product.id} >
<Card image={product.thumbnail} price={product.price} description={product.description} id={product.id}/>


            </div>

        )
    })}
</div>
   

 
    </>
  )
}

export default Products