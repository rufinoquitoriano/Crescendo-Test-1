import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Specialty from "../components/Specialty";

function SelectedRecipePage({ match }) {
  const { id } = match.params;
  const recipes = useSelector((state) => state.recipe.recipes);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  useEffect(() => {
    setSelectedRecipe(recipes.find((recipe) => recipe.uuid === id));
  }, [id, recipes]);
  console.log(selectedRecipe);
  return (
    !isEmpty(selectedRecipe) && (
      <div className="font-sans text-gray-100">
        <div className="py-10 pr-10">
          <img
            className="object-cover border rounded-xl shadow-4 "
            src={process.env.REACT_APP_API_URL + selectedRecipe.images.full}
          />
        </div>

        <div className="pb-6 mr-12 text-4xl font-bold text-center">
          {selectedRecipe.title}
        </div>
        <div className="p-4 mr-10 font-semibold border-2 rounded-xl">
          <div className="text-2xl text-center">
            {selectedRecipe.description}
          </div>
          <div className="pb-2 text-xl border-b-2">
            Cooking Time: {selectedRecipe.cookTime}mins.
          </div>
          <div className="text-xl">
            {selectedRecipe.directions.map((direction) => (
              <div>
                <p className="">
                  {direction.instructions}
                  <span className="italic text-red-400">
                    {!direction.optional ? "*" : "optional"}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-10">
          <div className="grid grid-cols-3 p-2 my-2 mr-10 border-2 rounded-xl">
            <div className="text-2xl">Name</div>
            <div className="text-2xl">Amount</div>
            <div className="text-2xl">Measurement</div>
          </div>
          <div className="mr-10 border-2 rounded-xl">
            {selectedRecipe.ingredients.map((ingridient) => (
              <div className="grid grid-cols-3 col-span-3 px-2">
                <div className="flex border-r-2">
                  {ingridient.name} <Specialty id={ingridient.uuid} />
                </div>
                <div className="mr-5 border-r-2 pl-9">{ingridient.amount}</div>
                <div>{ingridient.measurement}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}

export default SelectedRecipePage;
