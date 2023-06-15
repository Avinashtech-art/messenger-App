import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: true,
  name: "",
  userList: ["user1", "user2", "user3", "user4"],
  isUserAuthorized: false,
};

const userSlice = createSlice({
  name: "popup",
  initialState,

  reducers: {
    resetName: (state, action) => {
      state.userName = action.payload;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    listName: (state) => {
      state.userList = initialState.userList;
    },
    authenticate: (state, action) => {
      state.isUserAuthorized = action.payload;
    },
  },
});
export const {
  setShow,
  listName,
  setName,
  setIsFetching,
  authenticate,
  resetName,
} = userSlice.actions;

export default userSlice.reducer;
