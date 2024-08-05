import React, { useState, useEffect } from "react";

function LoadMore() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disabledbtn, setDisabledbtn] = useState(false)

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 10}`
      );
      const result = await response.json();

      if (result && result.products) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
      console.log(result)
    } catch (e) {
      console.error("Error fetching data:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);


  useEffect(() => {
    if(products && products.length===100) setDisabledbtn(true)
 
  }, [products])
  


  if (loading) {
    return <div>Loading the result !!! Please wait</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-4 gap-2">
        {products && products.length > 0 ? (
          products.map((item) => (
            <div key={item.id} className="p-5 border-2 flex flex-col gap-3">
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))
        ) : (
          <div>No products to display</div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button disabled={disabledbtn} className="bg-red-600 p-2 rounded-full font-bold m-2" onClick={()=>setCount(count+1)}>Load More Products</button>
        {
            disabledbtn? <p>You have reached to 100 products</p>:null
        }
      </div>
    </div>
  );
}

export default LoadMore;
