import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
  reducer: {
    user: userReducer,
    
  },
  
});

export default store;