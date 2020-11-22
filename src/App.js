import React from "react";
import "./App.sass";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import House from "./Pages/House/House.jsx";
import Designer from "./Pages/Designer/Designer.jsx";
import DesignerDetail from "./Pages/DesignerDetail/DesignerDetail.jsx";
import DesignerDetailFake from "./Pages/DesignerDetailFake/DesignerDetailFake.jsx";
import Idea from "./Pages/Idea/Idea.jsx";
// import Login from "./Pages/Login/Login.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={House} />
          <Route exact path="/designer" component={Designer} />
          <Route path="/designer-detail/:id" component={DesignerDetail} />
          <Route path="/designer-detail-search/:id" component={DesignerDetailFake} />
          <Route exact path="/idea" component={Idea} />
          {/* <Route exact path="/login" component={Login} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
