export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = id => {
  return { type: REMOVE_FEATURE, payload: id };
};

export const BUY_ITEM = "BUY_ITEM";

export const buyItem = id => {
  return { type: BUY_ITEM, payload: id };
};

export const UPDATE_TOTAL = "UPDATE_TOTAL";

export const updateTotal = () => {
  return { type: UPDATE_TOTAL };
};
