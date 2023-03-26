import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="bg-slate-100">
      <div className="max-w-[1080px] mx-auto h-[4.5rem] flex items-center justify-between">
        <div className="text-3xl font-bold">2Shop</div>
        <ul className="flex">
          <Link to="/">
            <li className="m-3 px-4 py-2 rounded hover:bg-slate-800 hover:text-white">
              Home
            </li>
          </Link>
          <Link to="/products">
            <li className="m-3 px-4 py-2 rounded hover:bg-slate-800 hover:text-white">
              Products
            </li>
          </Link>

          <Link to="/about">
            <li className="m-3 px-4 py-2 rounded hover:bg-slate-800 hover:text-white">
              About
            </li>
          </Link>

          <Link to="/contact">
            <li className="m-3 px-4 py-2 rounded hover:bg-slate-800 hover:text-white">
              Contact
            </li>
          </Link>
        </ul>
        <div>
          <Link to="/login">
            <button className="mx-2 border border-slate-800 hover:bg-slate-800 hover:text-white  rounded py-2 px-4">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="mx-2 border border-slate-800 hover:bg-slate-800 hover:text-white  rounded py-2 px-4">
              Register
            </button>
          </Link>
          <Link to="/cart">
            <button className="mx-2 border border-slate-800 hover:bg-slate-800 hover:text-white rounded py-2 px-4">
              Cart({state.length})
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
