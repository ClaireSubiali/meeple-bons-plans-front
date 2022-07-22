/*
import axios
import {
    LOGIN,
    CHANGE_FIELD_VALUE,    
} from ../actions/user;

// Pas sur qu'on en est vraiment besoin ???
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/',
});

const userMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
      case LOGIN: {
        // const state = store.getState();
        // const { email, password } = state.user;
        // équivalent : double destructuration
        const { user: { email, password } } = store.getState();
        */
  