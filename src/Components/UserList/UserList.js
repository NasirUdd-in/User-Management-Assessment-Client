import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import UserCard from "../UserCard/UserCard";

const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {user.map((singleUser, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <UserCard singleUser={singleUser} key={index}></UserCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UserList;
