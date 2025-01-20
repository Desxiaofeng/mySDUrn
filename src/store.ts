import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import counterReducer from './redux/counterSlice';

const persistConfig = {
  key: 'root', 
  storage: AsyncStorage, 
  whitelist: ['counter'], 
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

// const store = configureStore({
//   reducer: {
//     counter: persistedReducer, 
//   },
// });

const store = configureStore({
  reducer: {
    counter: persistedReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
export default store;
