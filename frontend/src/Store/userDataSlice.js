import axios from "axios";
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

// Define initial state
const initialState = {
  datalist: [],
  response: "",
  error: "",
  updateState: false,
  ID:'',
  currentUerData: {
    personal:{

       name: {
      text: "",
      formatting: {
        bold: "",
        italic: "",
        underline: "",
      },
    },

    linkedin: {
      text: "",
      formatting: {
        bold: "",
        italic: "",
        underline: "",
      },
    },
    contact: {
      text: "",
      formatting: {
        bold: "",
        italic: "",
        underline: "",
      },
    },
    email: {
      text: "",
      formatting: {
        bold: "",
        italic: "",
        underline: "",
      },
    },
    }
   
  },
};

// Create an async thunk for fetching data
export const fetchdata = createAsyncThunk("userData/fetchdata", async () => {
  console.log("yes");
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:5000/notes/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Return data from the API response
  } catch (error) {
    throw new Error(error.response.data.message); // Throw an error if there's an issue with the request
  }
});


export const fetchselecteddata = createAsyncThunk("selecteddata" , async(ID)=>{

    console.log(ID)

    try{
                  

        const token = localStorage.getItem("token")
       
            const response = await axios.get( `http://localhost:5000/notes/${ID}`,
                      {
                          headers: {
                              'Content-Type': 'application/json',
                              Authorization: `Bearer ${token}`
                          }
                      }
                  );

                  console.log(response.data[0])
                 return response.data[0]
    }
    catch(error){
        console.log(error)

    }
})

export const entry = createAsyncThunk("entry/addentry", async () => {
  try {
    const token = localStorage.getItem("token");
    console.log(token)
   

    const response = await axios.post(
      "http://localhost:5000/notes/",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message); // Throw an error if there's an issue with the request
  }
});

export const updatedata = createAsyncThunk(
  "data/updatedata",
  async (_, { getState }) => {

    const state = getState().userDataSlicekey;
    console.log(state.currentUerData);

    try {
      const token = localStorage.getItem("token");

     

        const response = await axios.put(
            `http://localhost:5000/notes/${state.ID}`,
            state.currentUerData.personal
               
            ,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }
        );

      // initialState.currentUerData = response.data
    } catch (error) {
      throw new Error(error.response.data.message); // Throw an error if there's an issue with the request
    }
  }
);

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
      const personal  = action.payload;

      const fields = ['name', 'linkedin', 'contact', 'email'];

      // console.log(personal)
      state.currentUerData = {
        personal: fields.reduce((acc, field) => {
          // Get the new text from personal
          const { text } = personal[field];
          
          // Preserve existing formatting from state.currentUerData
          const existingFormatting = state.currentUerData?.personal?.[field]?.formatting;
      
          // Update only the text, and keep the existing formatting unchanged
          acc[field] = {
            text: text,
            formatting: existingFormatting
          };
      
          return acc;
        }, {}),
      }
    

        

       
    },
    updateformatting:(state,action)=>{
      const {currentInputField,FormattingButtonName} = action.payload;
      
      if (state.currentUerData.personal[currentInputField].formatting[FormattingButtonName] === true) {
        state.currentUerData.personal[currentInputField].formatting = {
          ...state.currentUerData.personal[currentInputField].formatting,
          [FormattingButtonName]: false
        };
      }
      else{
        state.currentUerData.personal[currentInputField].formatting = {
          ...state.currentUerData.personal[currentInputField].formatting,
          [FormattingButtonName]: true
        };


      }
     


    },
    updateCurrentUserDataId: (state, action) => {
      state.currentUerData.id = action.payload;
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
      })

      .addCase(fetchselecteddata.pending, (state) => {
        // Handle pending state if needed
        state.error = "";
      })
      .addCase(fetchselecteddata.fulfilled, (state, action) => {
        const {_id , personal} = action.payload;
        console.log(_id)
        const fields = ['name', 'linkedin', 'contact', 'email'];

        // const { name, linkedin, contact, email } = personal;
        // const { text, formatting } = name;
        // const { bold, italic, underline } = formatting;
         
        state.ID=_id

        
        console.log(state.currentUerData);

        state.error = "";

        state.currentUerData = {

          personal: fields.reduce((acc, field) => {
            const { text, formatting } = personal[field];
            acc[field] = {
              text: text,
              formatting: {
                bold: formatting.bold,
                italic: formatting.italic,
                underline: formatting.underline,
              },
            };
            return acc;
          }, {}),
        };
      })
      .addCase(fetchselecteddata.rejected, (state, action) => {
        state.error = action.error.message;
        // state.datalist = [];
      });
  },
});

// Export actions and reducer from the slice

export const {
  changeStateTrue,
  changeStateFalse,
  clearResponse,
  updateCurrentUserDataId,
  updatePersonalData,
  updateformatting
} = userDataSlice.actions;
export default userDataSlice.reducer;
