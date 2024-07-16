import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Thunk for login
export const login = createAsyncThunk('auth/login', async (body, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/v1/signIn`, body);
    return res.data;
  } catch (error) {
    // Return a rejectWithValue to handle error in extraReducers
    return rejectWithValue((error.response && error.response.data && error.response.data.error) ||
      error.toString());
  }
});

// Thunk for registerUser
export const registerUser = createAsyncThunk('auth/register', async (body, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/api/v1/signUp`, body);
    return res.data;
  } catch (error) {
    // Return a rejectWithValue to handle error in extraReducers
    return rejectWithValue((error.response && error.response.data && error.response.data.error) ||
      error.toString());
  }
});

// Slice for auth
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
    loading: false,
    isSuccess: false,
  },
  reducers: {
    reset: (state) => {
      state.error = null;
      state.loading = false;
      state.isSuccess = false;
    },
    handleRefresh: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // addCase login
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.message == 'Success') {
          state.user = action.payload;
          state.isSuccess = true;
          state.error = null;
        }
        if (action.payload.message == "Invalid request data") {
          state.error = action.payload.errors[0].message;
          state.isSuccess = false;
        }
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isSuccess = false;
        state.loading = false;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })

      // addCase register
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload.message == 'Success') {
          state.user = action.payload;
          state.isSuccess = true;
          state.error = null;
        }
        if (action.payload.message == "Invalid request data") {
          state.error = action.payload.errors[0].message;
          state.isSuccess = false;
        }
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        state.user = null;
        state.loading = false;
        state.isSuccess = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.user = null;
        state.isSuccess = false;
      });
  }
})

export const { reset, handleRefresh, logout } = authSlice.actions;
export const authReducer = authSlice.reducer
