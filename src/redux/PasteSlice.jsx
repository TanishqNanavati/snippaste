import { createSlice } from '@reduxjs/toolkit'
import toast,{Toaster} from 'react-hot-toast';

const initialState = { 
    pastes:localStorage.getItem("pastes")
    ?JSON.parse(localStorage.getItem("pastes"))
    :[]
 }

const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    add(state,action) {
      const paste=action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast("Paste created successfully..")
    },
    update(state,action) {
      const paste=action.payload;
      const  index=state.pastes.findIndex((item)=>item._id===paste._id)

      if(index>=0){
        state.pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));

        toast.success("Paste Updated");

      }
    },
    reset(state, action) {
      state.pastes=[];
      localStorage.removeItem("pastes");
    },
    remove(state, action) {
      const pasteId=action.payload;
      console.log(pasteId);
      const  index=state.pastes.findIndex((item)=>item._id===pasteId);

      if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));

        toast.success("Paste deleted");
      }
    },
  },
})

export const { add,update,reset,remove} = PasteSlice.actions
export default PasteSlice.reducer