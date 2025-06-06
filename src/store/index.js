import { configureStore, } from '@reduxjs/toolkit';
import chatReducer from '../features/chat/chatSlice'
import userReducer from '../features/chat/userSlice'
import themeReducer from '../features/chat/themeSlice'


const index= configureStore({
  reducer: {
    chats:chatReducer,
    users:userReducer,
    theme: themeReducer
  },
});


export default index