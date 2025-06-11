import { createSlice } from "@reduxjs/toolkit";

// Initial State
const savedAuth = JSON.parse(localStorage.getItem('auth')) || {
  isAuthenticated: false,
  user: null, // e.g., { username: 'admin', role: 'admin' }
};

const authSlice = createSlice({
  name: 'auth',
  initialState: savedAuth,
  reducers: {
    login: (state, action) => {
      const { username, role } = action.payload;
      state.isAuthenticated = true;
      state.user = { username, role };
      localStorage.setItem('auth', JSON.stringify(state));
    },
    logout :(state)=>{
      state.isAuthenticated = false
      state.user = null
      localStorage.removeItem('auth')
    }

  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
