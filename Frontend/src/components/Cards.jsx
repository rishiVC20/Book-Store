import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-10 mb-10 my-3 mx-4">
        <div className="card bg-base-100 w-90 shadow-xl mt-4 mb-5  hover:scale-105 hover:border-none duration--200 dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body bg-white dark:bg-slate-900 dark:text-white">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-300 hover:text-white px-2 py-1">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
