import { configureStore, } from '@reduxjs/toolkit';
import chatReducer from '../features/chat/chatSlice'
import userReducer from '../features/chat/userSlice'


const index= configureStore({
  reducer: {
    chats:chatReducer,
    users:userReducer
  },
});


export default index