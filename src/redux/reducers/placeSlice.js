import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dashbordService from "../service/dashbordService";

const initialState = {
  "chui": null,
  "talas": null,
  "jalalAbad":null,
  "batken": null,
  "osh": null,
  "issykKul": null,
  "naryn": null,
  "chosen":[],
  
};


export const getChui = createAsyncThunk(
  "place/getChui",
  async () => {
    const res = await dashbordService.getChui();
    return res.data;
  }
);

export const getIssykKul = createAsyncThunk(
  "place/getIssykKul",
  async () => {
    const res = await dashbordService.getIssykKul();
    console.log(res);
    return res.data;
  }
);
export const getTalas = createAsyncThunk(
  "place/getTalas",
  async () => {
    const res = await dashbordService.getTalas();
    return res.data;
  }
);
export const getBatken = createAsyncThunk(
  "place/getBatken",
  async () => {
    const res = await dashbordService.getBatken();
    return res.data;
  }
);
export const getJalalAbad = createAsyncThunk(
  "place/getJalalAbad",
  async () => {
    const res = await dashbordService.getJalalAbad();
    return res.data;
  }
);

export const getNaryn = createAsyncThunk(
  "place/getNaryn",
  async () => {
    const res = await dashbordService.getJalalAbad();
    return res.data;
  }
);

export const getOsh = createAsyncThunk(
  "place/getOsh",
  async ()=>{
    const res = await dashbordService.getOsh();
    return res.data
  }
)

// export const getPlaces = createAsyncThunk(
//   "dashbord/getAll",
//   async () => {
//     const res = await dashbordService.getPlace();
//     console.log(res)
//     return res;
//   }
// );

// export const updateTutorial = createAsyncThunk(
//   "tutorials/update",
//   async ({ id, data }) => {
//     const res = await TutorialDataService.update(id, data);
//     return res.data;
//   }
// );

// export const deleteTutorial = createAsyncThunk(
//   "tutorials/delete",
//   async ({ id }) => {
//     await TutorialDataService.remove(id);
//     return { id };
//   }
// );

// export const deleteAllTutorials = createAsyncThunk(
//   "tutorials/deleteAll",
//   async () => {
//     const res = await TutorialDataService.removeAll();
//     return res.data;
//   }
// );

// export const findTutorialsByTitle = createAsyncThunk(
//   "tutorials/findByTitle",
//   async ({ title }) => {
//     const res = await TutorialDataService.findByTitle(title);
//     return res.data;
//   }
// );

const dashbordSlice = createSlice({
  name: "dasbordData",
  initialState,
  extraReducers: {
    [getChui.fulfilled]: (state, action) => {
      state["chui"] = [...action.payload]
    },
    [getIssykKul.fulfilled]: (state, action) => {
      state["issykKul"] = [...action.payload]
    },
    [getNaryn.fulfilled]: (state, action) => {
      state["naryn"] = [...action.payload]
    },
    [getTalas.fulfilled]: (state, action) => {
      state["talas"] = [...action.payload]
    },
    [getJalalAbad.fulfilled]: (state, action) => {
      state["jalalAbad"] = [...action.payload]
    },
    [getBatken.fulfilled]: (state, action) => {
      state["batken"] = [...action.payload]
    },
    [getOsh.fulfilled]: (state, action) => {
      state["osh"] = [...action.payload]
    },
  },
});


export default dashbordSlice.reducer;