import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([])

  let { productID } = useParams()
  
  useEffect(() => {
    const getData = async() => {
      const request = await axios(`https://fakestoreapi.com/products/${productID}`)
      const data = request.data
      setProduct(data)
    }
    getData()
  }, [])

  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.image}/>
        <p>Este producto es muy bkn, asi que compralo ya!!!!</p>
        <h3>${product.price}</h3>
    </div>
  )
}

export default Product