import React from "react";
import "./App.sass";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import House from "./Pages/House/House.jsx";
import HouseDesigner from "./Pages/HouseDesigner/HouseDesigner.jsx";
import HouseDesignerDetail from "./Pages/HouseDesignerDetail/HouseDesignerDetail.jsx";
import Designer from "./Pages/Designer/Designer.jsx";
import DesignerDetail from "./Pages/DesignerDetail/DesignerDetail.jsx";
import Idea from "./Pages/Idea/Idea.jsx";
import Login from "./Pages/Login/Login.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={House} />
          <Route exact path="/house-designer" component={HouseDesigner} />
          <Route exact path="/house-designer-detail/:id" component={HouseDesignerDetail} />
          <Route exact path="/designer" component={Designer} />
          <Route exact path="/designer-detail/:id" component={DesignerDetail} />
          <Route exact path="/idea" component={Idea} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
