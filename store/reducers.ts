import { createSlice, PayloadAction } from "react-redux";

// define interface that declares the structure of an individual user object
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// define an interface that describes the shape of managed state
interface UserState {
  users: User[];
}

// define initial state
const initialState: UserState = {
  users: []
};

// create a slice of the redux store
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    }
  }
});

// export
export const { setUsers } = userSlice.action;
export default userSlice.reducer;
