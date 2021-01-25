import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Specialty({ id }) {
  const [special, setSpecial] = useState({});
  const specials = useSelector((state) => state.recipe.specials);
  useEffect(() => {
    console.log(specials);
    if (!isEmpty(specials)) {
      setSpecial(
        specials.find((special) => {
          console.log(special.ingredientId);
          console.log(id);
          return special.ingredientId === id;
        })
      );
    }
  }, [specials, id]);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    let hovering = hover ? "absolute" : "hidden";
    return (
      hovering + " bg-gray-700 border-2 rounded-xl p-5 -top-36 right-16 w-64"
    );
  };
  //   console.log("special", special);
  //   console.log("id", id);
  return (
    !isEmpty(special) && (
      <div
        className="relative px-2"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className="text-red-500">Specials</p>
        <div>
          <div className={onHover()}>
            <div className="p-2 italic font-semibold text-gray-800 bg-gray-200 border-2 rounded-xl">
              <h1>{special.title}</h1>
              <p>{special.text}</p>
              <p>{special.type}</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Specialty;
