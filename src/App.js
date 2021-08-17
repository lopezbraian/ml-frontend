import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Result from "./page/Result";
import Detail from "./page/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/items"
          render={(props) => (
            <Layout>
              <Result {...props} />
            </Layout>
          )}
        />
        <Route
          exact
          path="/items/:id"
          render={() => (
            <Layout>
              <Detail />
            </Layout>
          )}
        />

        <Route path="/" render={(props) => <Layout {...props}></Layout>} />
      </Switch>
    </Router>
  );
}

export default App;
