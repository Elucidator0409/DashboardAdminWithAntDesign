
export const products = {
    state: {
      listProducts: [],
      count: 0,
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setListProducts(state, listProducts) {
        return {
            ...state,
            listProducts,
          };
      },
      setCount(state, count) {
        return {
            ...state,
            count,
          };
      },
    },
    effects: (dispatch) => ({
      // handle state changes with impure functions.
      // use async/await for async actions
      async fetchUsers(payload, rootState) {
        const data = await fetch('https://dummyjson.com/products')
        .then(response => response.json());
        console.log(data);
        this.setListProducts(data);
      }
    }),
    selectors: (slice, createSelector) => ({
      selectCount() {
        return slice(state => state.count);
      },
  }),
  };