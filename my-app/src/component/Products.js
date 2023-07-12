import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const fetchAPI = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    fetchAPI();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="button d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card text-center p-4 h-100" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    width='250px'
                    height="210px"
                  />
                  <div className="card-body" key={product.id}>
                    <h5 className="card-title">
                      {product.title.substring(0, 10)}
                    </h5>
                    <p className="card-text">${product.price}</p>
                    <Link
                      to={`/products/${product.id}`}
                      class="btn btn-outline-primary"
                    >
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-3">
            <h1 className="display-6 fw-bolder text-center text-primary">
              Latest Product
            </h1>
            <hr />
          </div>
          <div className="row">{loading ? <Loading /> : <ShowProducts />}</div>
        </div>
      </div>
    </div>
  );
}

export default Products;
