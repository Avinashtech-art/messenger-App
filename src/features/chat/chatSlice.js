// import { createSlice } from "@reduxjs/toolkit";

// export const chatSlice = createSlice({
//   name: "chat",
//   initialState: {
//     messages: [
//       { id: 1, content: "Hi", sender: "user1" },
//       { id: 2, content: "Hi", sender: "user2" },
//       { id: 3, content: "Hi", sender: "user3" },
//       { id: 4, content: "Hi", sender: "user4" },
//     ],
//     isFirstUser: true,
//   },
//   reducers: {
//     addMessage: (state, action) => {
//       // console.log("isFirst",state.isFirstUser)
//       const message = {
//         id: Math.floor(Math.random() * 100000),
//         content: action.payload,
//         sender: state.isFirstUser ? "user1" : "user2" ,
//       };
//       state.messages.push(message);
//       state.isFirstUser = !state.isFirstUser;
//     },
//     editMessage: (state, action) => {
//       const { id, content } = action.payload;
//       const message = state.messages.find((message) => message.id === id);
//       if (message) {
//         message.content = content;
//       }
//     },
//     deleteMessage: (state, action) => {
//       const id = action.payload;
//       state.messages = state.messages.filter((message) => message.id !== id);
//     },
//   },
// });

// export const { addMessage, editMessage, deleteMessage } = chatSlice.actions;

// export default chatSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chat",
  initialState: {
    currentUser: "",
    messages: [
      { id: 1, content: "Hi", sender: "user1" },
      { id: 2, content: "Heloooo", sender: "user2" },
      { id: 3, content: "How are you", sender: "user3" },
      { id: 4, content: "Heyy.... man", sender: "user4" },
    ],
  },
  reducers: {
    addMessage: (state, action) => {
      const message = {
        id: Math.floor(Math.random() * 100000),
        content: action.payload,
        sender: state.currentUser,
      };
      state.messages.push(message);
    },
    editMessage: (state, action) => {
      const { id, content } = action.payload;
      const message = state.messages.find((message) => message.id === id);
      if (message) {
        message.content = content;
      }
    },

    deleteMessage: (state, action) => {
      const id = action.payload;
      state.messages = state.messages.filter((message) => message.id !== id);
    },  

    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { addMessage, editMessage, deleteMessage, setCurrentUser } =
  chatSlice.actions;

export default chatSlice.reducer;
