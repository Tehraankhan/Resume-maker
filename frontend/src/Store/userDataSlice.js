import axios from "axios";
import { createSlice, createAsyncThunk ,createAction } from "@reduxjs/toolkit";
import { json } from "react-router-dom";


// Define initial state
const initialState = {
    datalist: [],
    response: "",
    error: "",
    updateState: false,
    currentUerData: {
        id:"",
        personal:{
        },

        

        
      },
};

// Create an async thunk for fetching data
export const fetchdata = createAsyncThunk('userData/fetchdata', async () => {
    console.log("yes")
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
            "http://localhost:5000/notes/",
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
        return response.data; // Return data from the API response
    } catch (error) {
        throw new Error(error.response.data.message); // Throw an error if there's an issue with the request
    }
});


export const entry = createAsyncThunk('entry/addentry', async (_, { getState ,dispatch }) => {
 
    try {
        const token = localStorage.getItem('token');
        const personal = getState().userDataSlicekey.currentUerData.personal;
        
        
        
        const response = await axios.post(
            "http://localhost:5000/notes/",
            
               personal
            ,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );
          const id = response.data._id
          dispatch(userDataSlice.actions.updateCurrentUserDataId(id));
          
          localStorage.setItem('ID',id);
       //   console.log(getState().userDataSlicekey.currentUerData)
  
    } catch (error) {
        throw new Error(error.response.data.message); // Throw an error if there's an issue with the request
    }
})

export const updatedata = createAsyncThunk('data/updatedata', async (personaldata) => {
//   console.log(getState().userDataSlicekey.currentUerData)
   
    try {
          const token = localStorage.getItem('token');
        //  const currentData = getState().userDataSlicekey.currentUerData;
          const ID = localStorage.getItem('ID');
          console.log(personaldata)
          
       
          
          const response = await axios.put(
              `http://localhost:5000/notes/${ID}`,
              
                 personaldata
              ,
              {
                  headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${token}`
                  }
              }
          );
           
    
      } catch (error) {
          throw new Error(error.response.data.message); // Throw an error if there's an issue with the request
      }
  })


// Create a slice for managing user data
const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        changeStateTrue: (state) => {
            state.updateState = true;
        },
        changeStateFalse: (state) => {
            state.updateState = false;
        },
        clearResponse: (state) => {
            state.response = "";
        },
        updatePersonalData: (state, action) => {
            console.log("yes")
            state.currentUerData.personal = action.payload
        },
        updateCurrentUserDataId: (state, action) => {
            state.currentUerData.id = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchdata.pending, (state) => {
                // Handle pending state if needed
                state.error = "";
            })
            .addCase(fetchdata.fulfilled, (state, action) => {
                state.datalist = action.payload;
                state.error = "";
            })
            .addCase(fetchdata.rejected, (state, action) => {
                state.error = action.error.message;
               // state.datalist = [];
            });
    },
});

// Export actions and reducer from the slice


export const { changeStateTrue, changeStateFalse, clearResponse ,updateCurrentUserDataId ,updatePersonalData } = userDataSlice.actions;
export default userDataSlice.reducer;
