import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
        
        <Router>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route exact path='/Business' element={<News key="Business" pageSize={this.pageSize} country="in" category="Business" />} />
            <Route exact path='/Entertainment' element={<News key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" />} />
            <Route exact path='/Sports' element={<News key="Sports" pageSize={this.pageSize} country="in" category="Sports" />} />
            <Route exact path='/Health' element={<News key="Health" pageSize={this.pageSize} country="in" category="Health" />} />
            <Route exact path='/Science' element={<News key="Science" pageSize={this.pageSize} country="in" category="Science" />} />
            <Route exact path='/Technology' element={<News key="Technology" pageSize={this.pageSize} country="in" category="Technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
