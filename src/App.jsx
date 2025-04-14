import React from 'react';
import useFetch from './hooks/useFetch';
function App() {
  const [loading , error , data ] = useFetch('https://dummyjson.com/products')


if(loading) {
  return <h1>Loading...</h1>
}
if(error) {
  return <h1>Error</h1>
}


  return (
    <>
 <div>
  {data.map(item => {
    return (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <img src={item.image} alt={item.title} />
      </div>
    );
  })}
</div>

    </>
  )
}

export default App
