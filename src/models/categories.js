import { loadCategories } from "../libs/api";

function createCategoryModel(loadCategories) {
  return {
    state: {
      list: []
    },
    reducers: {
      setCategoryList(state, list) {
        state.list = list;
      }
    },
    effects: dispatch => ({
      async loadAllCategories(list, rootState) {
        const categories = await loadCategories();
        this.setCategoryList(categories);
      }
    })
  };
}

export { createCategoryModel };
export default createCategoryModel(loadCategories);
