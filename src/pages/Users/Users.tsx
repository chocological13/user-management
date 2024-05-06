import React from "react";
import NavBar from "../../components/NavBar";
import UsersList from "./components/UsersList";

const Users: React.FC = () => {
  return (
    <div>
      <NavBar />
      <UsersList />
    </div>
  );
};

export default Users;
