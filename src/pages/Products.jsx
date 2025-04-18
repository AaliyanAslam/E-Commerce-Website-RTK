import React , {useEffect , useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../config/redux/reducers/productsSlice'
import Card from '../components/Cards'
import  {addToCarts}  from "../config/redux/reducers/cartSlice"
import Footer from "../components/Footer"

const Products = () => {
    const dispatch = useDispatch()

    // const dispatch2 = useDispatch()
    
    const [showMessege , setShowMessege] = useState(false)
    useEffect(()=>{
      if(showMessege){
       const timer =  setTimeout(()=> {
setShowMessege(false)
        } , 1000)
        return()=> clearTimeout(timer)
      }
    },[showMessege])
    
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])
    const { data, isLoading, isError } = useSelector((state) => state.product);

    console.log("Products:", data);
      // const dispatch1 = useDispatch();
    
      const handleAddToCart = (product) => {
        dispatch(addToCarts(product))
       console.log("added")
       setShowMessege(true)
       
        
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
    
<div className='flex flex-wrap gap-2 sm:gap-1 md:gap-3 lg:gap-4 justify-center mt-4 bg-white'>
{showMessege && 
  <div
    className="fixed bottom-8 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-2xl z-50 
               animate-slide-in opacity-90 transition-all duration-300 ease-out"
  >
    Item added to cart!
  </div>
}

    {data && data.products.map((product, index) => {
        return(
            <div key={product.id} >
<Card image={product.thumbnail} price={product.price} description={product.description} id={product.id} title ={product.title} add = {()=>{handleAddToCart(product)}}/>


            </div>

        )
    })}
</div>
   

<Footer style="footer sm:footer-horizontal bg-white text-black-content p-10  border-gray" />
 
    </>
  )
}

export default Products