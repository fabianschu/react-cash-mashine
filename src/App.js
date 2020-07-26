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
import SwitchModeToggle from "./components/SwitchModeToggle";

const App = () => (
  <Layout>
    <SwitchModeToggle />
    <BrowserRouter>
      <Route path="/">
        <WorkMode />
      </Route>
    </BrowserRouter>
  </Layout>
);

export default App;
