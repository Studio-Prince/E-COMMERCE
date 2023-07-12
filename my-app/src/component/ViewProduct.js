import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action/productItem";
function ViewProduct() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addCart(product));
  };
  const delProductToCart = (product) => {
    dispatch(delCart(product));
  };

  const totalPrice = state.reduce(
    (price, product) => price + product.qty * product.price,
    0
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <table className="table">
            <thead>
              <tr>
                <th className="col">#</th>
                <th className="col">product</th>
                <th className="col">Quality</th>
                <th className="col">Price</th>
                <th className="col"></th>
              </tr>
            </thead>
            {state.map((product, i) => {
              return (
                <tbody>
                  <tr>
                    <th>{i + 1}</th>
                    <th>
                      <img
                        src={product.image}
                        alt={product.title}
                        width="100px"
                        height="100px"
                      />
                    </th>
                    <th>
                      <h4 className="mt-5 ms-3">{product.qty}</h4>
                    </th>
                    <th>
                      <h4 className="mt-5">${product.qty * product.price}</h4>
                    </th>
                    <th>
                      <button
                        className="btn btn-outline-danger me-5 mt-5 w-25 "
                        onClick={() => delProductToCart(product)}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-outline-primary mt-5 w-25"
                        onClick={() => addProductToCart(product)}
                      >
                        +
                      </button>
                    </th>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
        <div>
          Total Price ${totalPrice}
        </div>
      </div>
    </>
  );
}

export default ViewProduct;
