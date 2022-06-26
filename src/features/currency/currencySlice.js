import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "UZS",
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.value = action.payload
    },
  },
})


export const { setCurrency } = currencySlice.actions

export const selectCurrency = (state) => state.currency.value

export default currencySlice.reducer