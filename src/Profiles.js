import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목룍:</h3>
      <ul>
        <li>
          <link to="/profiles/velopert">velopert</link>
          <link to="/prifiles/seilylook">seilylook</link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 입력하세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
