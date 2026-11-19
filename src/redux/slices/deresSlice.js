import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../shared/api/api";

export const fetchDeresTypes = createAsyncThunk(
    "deres/fetchDeresTypes",
    async () => {
        try {
            const response = await api.get("/api/deretypes/deretypes");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
);

const initialState = {
  items: [],
  favorites: [],
  status: "idle",
};

const deresSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
        const id = action.payload;

        if (state.favorites.includes(id)) {
            state.favorites = state.favorites.filter(itemId => itemId !== id);
        } else {
            state.favorites.push(id);
        };
    },
  },
  extraReducers: (builder) => {
    builder
        // Get Dere-Types
        .addCase(fetchDeresTypes.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchDeresTypes.fulfilled, (state, action) => {
            state.status = "success";
            state.items = action.payload;
        })
        .addCase(fetchDeresTypes.rejected, (state) => {
            state.status = "error";
        });
  },
});

export const { toggleFavorite } = deresSlice.actions;
export default deresSlice.reducer;