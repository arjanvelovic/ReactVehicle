import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        trim: "Trim",
        year: "Year",
        color: "Color",
        cost: "Cost",
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseTrim: (state, action) => { state.trim = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseCost: (state, action) => { state.cost = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseTrim, chooseYear, chooseColor, chooseCost} = rootSlice.actions