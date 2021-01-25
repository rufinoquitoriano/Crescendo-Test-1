import React from "react";

function Recipe({ recipe }) {
  return (
    <div className="flex w-full max-w-5xl font-serif">
      <div className="">
        <img
          className="object-cover w-64 h-64 border shadow"
          src={process.env.REACT_APP_API_URL + recipe.images.full}
        />
        <div className="text-2xl text-center text-gray-300">{recipe.title}</div>
      </div>
    </div>
  );
}

export default Recipe;
