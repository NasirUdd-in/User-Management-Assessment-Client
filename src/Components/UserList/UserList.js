import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import UserCard from "../UserCard/UserCard";
import { Container } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../Hooks/usePagination/usePagination";
const UserList = () => {
  const [user, setUser] = useState([]);
  const [page, setPage] = React.useState(1);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const PER_PAGE = 4;
  const count = Math.ceil(user.length / PER_PAGE);
  const _DATA = usePagination(user, PER_PAGE);

  const handleChange = (event, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {_DATA.currentData().map((singleUser, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <UserCard singleUser={singleUser} key={index}></UserCard>
          </Grid>
        ))}
      </Grid>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Container>
  );
};

export default UserList;
