export const wishlistfxn = (state, action) => {
  if (action.type === "delete") {
    return { ...state, type: "delete", product: action.payload };
  } else if (action.type === "post") {
    return { ...state, type: "post", product: action.payload };
  } else {
    return state;
  }
};
