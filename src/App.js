import "./App.css";
import UserList from "./Components/UserList/UserList";
// import Header from "./Shared/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Pages/Users/Users";
import Navigation from "./Shared/Navigation/Navigation";
import CreateUser from "./Pages/CreateUser/CreateUser";
// import Header from "./Shared/Header/Header";

// import UserDataCollect from './Components/UserDataCollect/UserDataCollect';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/Createuser">
            <CreateUser />
          </Route>
          <Route exact path="/">
            <Users />
          </Route>
        </Switch>
      </Router>
      <UserList />
    </div>
  );
}

export default App;
