import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

// post data
export const createData = createAsyncThunk("post/createData", async (data) => {
  const response = await axios.post("http://localhost:5000/user/", data);
  return response.data;
});

// get Data
export const getData = createAsyncThunk("post/getData", async () => {
  const response = await axios.get(`http://localhost:5000/user`);

  return response.data;
});

export const getById = createAsyncThunk("post/getData", async (_id) => {
  const response = await axios.get(`http://localhost:5000/user/${_id}`);
  return response.data;
});

// ** Update data
// export const updateData = createAsyncThunk(
//   "appCalendar/updateData",
//   async (_id, { dispatch }) => {
//     const response = await axios.put(`http://localhost:5000/user/${_id}`);
//     return response.data._id;
//   }
// );

// export const updateData = createAsyncThunk(
//   "post/updateData",
//   async (props) => {
//     const {_id,_v, ...other} = props;
//     const response = await axios.put(`http://localhost:5000/user/${props._id}`, other);
//     return response.data;
//   }
// );

export const updateData =  (
  "post/updateData",
  async (data) => {
    const response = await axios.put(`http://localhost:5000/user/${data._id}`, data);
    return response.data.id;
  }
);

// delete Data
export const deleteData = createAsyncThunk("post/deleteData", async (_id) => {
  const response = await axios.delete(`http://localhost:5000/user/${_id}`);
  return response.data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    loading: false,
    error: null,
    body: "",
    edit: false,
  },

  reducers: {
    setEdit: (state, action) => {
      state.edit = action.payload.edit;
      state.body = action.payload.body;
    },
  },
  extraReducers: {
    [getData.pending]: (state, action) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [getData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [getById.pending]: (state, action) => {
      state.loading = true;
    },
    [getById.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [getById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteData.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteData.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
    [deleteData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [createData.pending]: (state, action) => {
      state.loading = true;
    },
    [createData.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [createData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateData.pending]: (state, action) => {
      state.loading = true;
    },
    [updateData.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    },
    [updateData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setEdit } = postSlice.actions;

export default postSlice.reducer;
