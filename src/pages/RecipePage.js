import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Recipe from "../components/Recipe";

function RecipePage({ match }) {
  const recipes = useSelector((state) => state.recipe.recipes);

  return (
    <div className="flex flex-col items-center h-full px-4 py-16 bg-gray-900 bg-opacity-25">
      <div className="font-bold tracking-widest text-gray-500 border-b-4 border-gray-300 border-double font-lobster text-9xl">
        Menu
      </div>
      <div className="flex flex-wrap justify-center ">
        {!isEmpty(recipes) &&
          recipes.map((recipe) => (
            <div className="p-4 hover:bg-gray-500" key={recipe.uuid}>
              <Link to={`${match.url}/${recipe.uuid}`}>
                <Recipe recipe={recipe} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RecipePage;
