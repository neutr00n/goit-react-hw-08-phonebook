export const handleFulfilledRegistration = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedin = true;
  state.error = null;
};

export const handleRejectedRegistration = (state, { payload }) => {
  state.error = payload;
};

export const handleLogOutUser = state => {
  state.user = {
    name: null,
    email: null,
  };
  state.token = null;
  state.isLoggedin = false;
};

export const handlePendingRefreshUser = state => {
  state.isRefreshing = true;
};

export const handleFulfilledRefreshUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedin = true;
  state.error = null;
  state.isRefreshing = false;
};

export const handleRejectedRefreshUser = (state, { payload }) => {
  state.error = payload;
  state.isRefreshing = false;
};
