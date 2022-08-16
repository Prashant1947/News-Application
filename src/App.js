import './App.css';


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News   from './Components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apikey = "82df88d170974d55b23529d114e618ee"

  render() {
    return (
      <div>
        <Router>

          <Navbar />
          
          {/* <News setprogress={setprogress}  country="in" category="science"/> */}
          
          <Routes>
            <Route exact path="/" element={<News apikey={this.apikey} key="general" country="in" category="general"/>} ></Route>
            <Route exact path="/Business" element={<News apikey={this.apikey} country="in" key="business" category="business" />} ></Route>
            <Route exact path="/Entertainment" element={<News apikey={this.apikey} country="in" key="entertainment" category="entertainment" />} ></Route>
            <Route exact path="/General" element={<News apikey={this.apikey} key="general" country="in" category="general"/>} ></Route>
            <Route exact path="/Health" element={<News apikey={this.apikey}  key="health" country="in" category="health"/>} ></Route>
            <Route exact path="/Science" element={<News apikey={this.apikey} key="science" country="in" category="science"/>}></Route>
            <Route exact path="/Sports" element={<News apikey={this.apikey} key="sports" country="in" category="sports"/>}></Route>
            <Route exact path="/Technology" element={<News apikey={this.apikey} key="technology" country="in" category="technology"/>}></Route>
          </Routes>
        </Router>
      </div>
      
    )
  }
  
}
