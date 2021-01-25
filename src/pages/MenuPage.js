import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import SelectedRecipe from "./SelectedRecipePage";
import raw from "../image/raw.jpg";
import RecipePage from "./RecipePage";
function MenuPage({ match }) {
  return (
    <div>
      <div
        className="flex w-full min-h-screen bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${raw})` }}
      >
        <div className="flex flex-col w-1/2 h-full pt-4 pl-4 text-5xl text-gray-300">
          <div className="flex py-2">
            <Link to="/">
              <div className="px-10 py-2 border-2 hover:bg-gray-500 rounded-xl">
                Home
              </div>
            </Link>
          </div>
          <Link to="/menu">
            <div className="flex py-2">
              <div className="px-10 py-2 border-2 hover:bg-gray-500 rounded-xl">
                Menu
              </div>
            </div>
          </Link>
        </div>

        <div className="flex-1">
          <Switch>
            <Route path={`${match.url}/:id`} component={SelectedRecipe} />
            <Route path={match.url + "/"} component={RecipePage} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
