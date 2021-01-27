import "./App.css";
import Layout from "./containers/Layout/Layout";
import Home from "./components/Home/Home";
import Works from "./components/Works/Works";
import ContactForm from "./components/ContactForm/ContactForm";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={ContactForm} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
