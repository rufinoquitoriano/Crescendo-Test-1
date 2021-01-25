import axios from "../../service/axios";
const GET_RECIPES = "get_recipe";
const GET_SPECIALS = "get_special";

export const getRecipes = () => {
  return (dispatch) => {
    axios
      .get("/recipes")
      .then((response) => {
        dispatch(fetchRecipeSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchRecipeFailed());
      });
  };
};

export const getSpecials = () => {
  return (dispatch) => {
    axios
      .get("/specials")
      .then((response) => {
        dispatch(fetchSpecialSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchSpecialFailed());
      });
  };
};

const fetchSpecialSuccess = (data) => ({
  type: GET_SPECIALS,
  payload: {
    success: true,
    specials: data,
  },
});

const fetchSpecialFailed = (data) => ({
  type: GET_SPECIALS,
  payload: {
    success: false,
    specials: [],
  },
});

const fetchRecipeSuccess = (data) => ({
  type: GET_RECIPES,
  payload: {
    success: true,
    recipes: data,
  },
});

const fetchRecipeFailed = (data) => ({
  type: GET_RECIPES,
  payload: {
    success: false,
    recipes: [],
  },
});

const initialState = {
  success: false,
  recipes: [],
  specials: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES: {
      return {
        ...state,
        recipes: action.payload.recipes,
        success: action.payload.success,
      };
    }
    case GET_SPECIALS: {
      return {
        ...state,
        specials: action.payload.specials,
        success: action.payload.success,
      };
    }
    default:
      return initialState;
  }
};

export default reducer;
