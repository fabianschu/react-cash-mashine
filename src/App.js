import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {
  useTheme,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core/styles";
import WorkMode from "./pages/WorkMode";
import Layout from "./pages/Layout";
import theme from "./theme";

const App = () => (
  <Layout>
    <BrowserRouter>
      <Route path="/">
        <WorkMode />
      </Route>
    </BrowserRouter>
  </Layout>
);

export default App;
