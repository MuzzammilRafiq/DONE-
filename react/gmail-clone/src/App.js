import React  from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import EmailList from './Components/EmailList';
import Header from './Components/Header';
import Mail from './Components/Mail';
import Sidebar from './Components/Sidebar';
import SendMail from './Components/SendMail';

function App() {
  return ( 
    <Router>
      <div className="app">
        <Header/>
        <div className="app_body">
          <Sidebar/>
          <Switch>
            <Route path="/mail">  <Mail/> </Route>
            <Route path="/">  <EmailList/> </Route>
          </Switch>
        </div>
        <SendMail/>
      </div>
    </Router>
  );
}

export default App;