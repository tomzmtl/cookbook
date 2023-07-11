import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: []
}

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {},
})
