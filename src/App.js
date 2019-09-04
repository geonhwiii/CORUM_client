import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import EditPage from "./Pages/EditPage";
import PostPage from "./Pages/PostPage";
import MyPage from "./Pages/MyPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/mypage" component={MyPage} />
        <Route exact path="/post/:number" component={PostPage} />
        <Route path="/" component={Home} />
        <Route exact path="/edit" component={EditPage} />
      </Switch>
    </Router>
  );
};

export default App;
