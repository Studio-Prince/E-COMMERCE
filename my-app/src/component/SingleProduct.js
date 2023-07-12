import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import {useDispatch, useSelector} from 'react-redux';
import { addCart } from "../redux/action/productItem";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const state = useSelector((state)=>state)


  
  const dispatch = useDispatch()

  const addItem = (product)=>{
    dispatch(addCart(product))
  }

  

  useEffect(() => {
    setLoading(true);
    const fetchAPI = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    fetchAPI();
  }, []);
  const Loading = () => {
    return <>
    <div className="col-md-6">
        <Skeleton height={400} count={10}/>
    </div>
    <div className="col-md-6">
        <Skeleton height={50} width={300}/>
    </div>
    </>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6 text-primary">
            <h4 className="text-uppercase">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="">{product.description}</p>
            <p className="lead fw-bolder">Rating {product.rating&&product.rating.rate}</p>
            <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
            <button onClick={()=>addItem(product)} className="btn btn-outline-primary px-4 py-2">Add to Cart</button>
            <Link to='/cart' className="btn btn-primary ms-2 px-3 py-2">Go to Cart</Link>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
}

export default SingleProduct;
