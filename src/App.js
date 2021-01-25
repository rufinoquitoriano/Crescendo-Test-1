import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
// import RecipePage from "./pages/RecipePage";
import LandingPage from "./pages/LandingPage";
import MenuPage from "./pages/MenuPage";
import { getRecipes, getSpecials } from "./redux/ducks/Recipe";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getSpecials());
  }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        <Route path="/menu" component={MenuPage} />
        <Route path="/" component={LandingPage} />
        {/* <RecipePage /> */}
      </Switch>
    </div>
  );
}
export default App;
