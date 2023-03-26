import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const filterProducts = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <div className="max-w-[1080px] mx-auto">
      <div className="text-center my-6 text-3xl border-b-2 border-slate-800 p-4">
        Latest Trends
      </div>
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setFilter(data)}
          className="mr-2 border border-slate-800 hover:bg-slate-800 hover:text-white rounded py-2 px-4"
        >
          All
        </button>
        <button
          onClick={() => {
            filterProducts("men's clothing");
          }}
          className="mr-2 border border-slate-800 hover:bg-slate-800 hover:text-white  rounded py-2 px-4"
        >
          Men's clothings
        </button>
        <button
          onClick={() => {
            filterProducts("women's clothing");
          }}
          className="mr-2 border border-slate-800 hover:bg-slate-800 hover:text-white  rounded py-2 px-4"
        >
          Women's clothings
        </button>
        <button
          onClick={() => {
            filterProducts("jewelery");
          }}
          className="mr-2 border border-slate-800 hover:bg-slate-800 hover:text-white  rounded py-2 px-4"
        >
          Jewelery
        </button>
        <button
          onClick={() => {
            filterProducts("electronics");
          }}
          className="mr-2 border border-slate-800 hover:bg-slate-800 hover:text-white  rounded py-2 px-4"
        >
          Electronics
        </button>
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {filter.map((products) => {
            return (
              <div key={products.id} className="rounded p-4 border text-center">
                <img
                  src={products.image}
                  alt={products.title.substring(0, 12)}
                  height={"250px"}
                  width={"250px"}
                />
                <div className="">${products.price}</div>
                <div className="mb-4">{products.title.substring(0, 12)}...</div>
                <div className="">
                  <Link
                    to={`/products/${products.id}`}
                    className="px-4 py-2 bg-slate-800 rounded text-white"
                  >
                    Buy now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
