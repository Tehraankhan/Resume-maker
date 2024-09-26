import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Education from "../Components/Education";

const url = "https://resume-maker-backend-13vv.onrender.com";
// Define initial state
const initialState = {
  datalist: [],
  response: "",
  error: "",
  updateState: false,
  ID: "",
  currentUerData: {
    personal: {
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
    },

    education: [],
    project: [],
  },
};

// Create an async thunk for fetching data
export const fetchdata = createAsyncThunk("userData/fetchdata", async () => {
  console.log("yess");
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

export const fetchselecteddata = createAsyncThunk(
  "selecteddata",
  async (ID) => {
    console.log(ID);

    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`http://localhost:5000/notes/${ID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data[0]);
      return response.data[0];
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteselecteddata = createAsyncThunk(
  "deleteselecteddata",
  async (ID) => {
    console.log(ID);

    try {
      const token = localStorage.getItem("token");

      const response = await axios.delete(`http://localhost:5000/notes/delete/selecteddata/${ID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });


      return response
    } catch (error) {
      console.log(error);
    }
  }
);




export const entry = createAsyncThunk("entry/addentry", async () => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);

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
    console.log(state.ID);

    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        `http://localhost:5000/notes/${state.ID}`,
        state.currentUerData,

        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response;

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
      const personal = action.payload;

      const fields = ["name", "linkedin", "contact", "email"];

      // console.log(personal)
      state.currentUerData = {
        personal: fields.reduce((acc, field) => {
          // Get the new text from personal
          const { text } = personal[field];

          // Preserve existing formatting from state.currentUerData
          const existingFormatting =
            state.currentUerData?.personal?.[field]?.formatting;

          // Update only the text, and keep the existing formatting unchanged
          acc[field] = {
            text: text,
            formatting: existingFormatting,
          };

          return acc;
        }, {}),

        education: state.currentUerData.education,
        project:state.currentUerData.project
      };
    },
    updateEducationData: (state, action) => {
      const { education, selected } = action.payload;
      console.log(education + selected)

      // Access the specific education item that needs to be updated

      state.currentUerData.education[selected] = {
        institutename: {
          text: education.institutename.text,
          formatting: education.institutename.formatting,
        },
        yearofgradutation: {
          text: education.yearofgradutation.text,
          formatting: education.yearofgradutation.formatting,
        },
        CourseName: {
          text: education.CourseName.text,
          formatting: education.CourseName.formatting,
        },
        degree: {
          text: education.degree.text,
          formatting: education.degree.formatting,
        },
        description: {
          text: education.description.text,
          formatting: education.description.formatting,
        },
      };
    },
    updateProjectData: (state, action) => {
      const { project, selected } = action.payload;
      

      // Access the specific education item that needs to be updated

      state.currentUerData.project[selected] = {
        projectname: {
          text: project.projectname?.text,
          formatting: project.projectname.formatting,
        },
        description: {
          text: project.description.text,
          formatting: project.description.formatting,
        },
      };
    },

    updateformatting: (state, action) => {
      const { currentInputField, FormattingButtonName, currentsection } =
        action.payload;
      console.log(currentsection);
      const selected = localStorage.getItem("selecteddata");
      if (currentsection === "personal") {
        if (
          state.currentUerData.personal[currentInputField].formatting[
            FormattingButtonName
          ] === true
        ) {
          state.currentUerData.personal[currentInputField].formatting = {
            ...state.currentUerData.personal[currentInputField].formatting,
            [FormattingButtonName]: false,
          };
        } else {
          state.currentUerData.personal[currentInputField].formatting = {
            ...state.currentUerData.personal[currentInputField].formatting,
            [FormattingButtonName]: true,
          };
        }
      } else if (currentsection === "Education") {
        console.log(
          state.currentUerData.education[selected][currentInputField]
        );
        if (
          state.currentUerData.education[selected][currentInputField]
            .formatting[FormattingButtonName] === true
        ) {
          state.currentUerData.education[selected][
            currentInputField
          ].formatting = {
            ...state.currentUerData.education[selected][currentInputField]
              .formatting,
            [FormattingButtonName]: false,
          };
        } else {
          state.currentUerData.education[selected][
            currentInputField
          ].formatting = {
            ...state.currentUerData.education[selected][currentInputField]
              .formatting,
            [FormattingButtonName]: true,
          };
        }
      } else if (currentsection === "project") {
        if (
          state.currentUerData.project[selected][currentInputField]
            .formatting[FormattingButtonName] === true
        ) {
          state.currentUerData.project[selected][
            currentInputField
          ].formatting = {
            ...state.currentUerData.project[selected][currentInputField]
              .formatting,
            [FormattingButtonName]: false,
          };
        } else {
          state.currentUerData.project[selected][
            currentInputField
          ].formatting = {
            ...state.currentUerData.project[selected][currentInputField]
              .formatting,
            [FormattingButtonName]: true,
          };
        }
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
        const { _id, personal, education,project } = action.payload;
        console.log(education);
        const fields = ["name", "linkedin", "contact", "email"];

        // const { name, linkedin, contact, email } = personal;
        // const { text, formatting } = name;
        // const { bold, italic, underline } = formatting;

        state.ID = _id;

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

          education: education,
          project:project
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
  updateformatting,
  updateEducationData,
  updateProjectData,
  
} = userDataSlice.actions;
export default userDataSlice.reducer;
