import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Product = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProducts(await res.json());
      setLoading(false);
    };
    // main
    getProducts();
  }, []);

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  return (
    <div className="max-w-[1080px] mx-auto mt-8">
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex justify-between gap-8">
          <img src={products.image} width={400} alt="" />
          <div className="">
            <div className="font-bold text-5xl my-2">{products.title}</div>
            <div className="font-bold text-2xl my-2">{products.category}</div>
            <div className="">
              Rating: {products.rating && products.rating.rate}
            </div>
            <div className="font-bold">
              {products.rating && products.rating.count} people liked this
            </div>
            <div className="text-3xl font-bold my-2">${products.price}</div>
            <div className="my-2">{products.description}</div>
            <button
              onClick={() => addProduct(products)}
              className="mx-2 border border-slate-800 hover:bg-slate-800 hover:text-white rounded py-2 px-4"
            >
              Add to Cart
            </button>
            <Link
              to={"/cart"}
              className="mx-2 bg-slate-800 text-white rounded py-3 px-4"
            >
              Go to Cart
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
