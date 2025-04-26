import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchword = createAsyncThunk(
    'word/fetch',
    async(args , thunkAPI) => {
        try{
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${args}`);
            const data = await response.json();
            return data;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message);
        }
    } 
);

const slicer1 = createSlice({
    name:"slice1",
    initialState:
    {
        data:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
            .addCase(fetchword.pending,(state)=>{
                state.loading = true;
                state.error = false;
            })
            .addCase(fetchword.fulfilled , (state , action)=>{
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchword.rejected , (state , action)=>{
                state.loading = false;
                state.error = action.payload;
            })
    }

});

export default slicer1.reducer;

export {fetchword};