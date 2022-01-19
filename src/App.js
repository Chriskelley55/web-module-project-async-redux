import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import AuthorList from './components/AuthorList';
import SelectedQuote from './components/SelectedQuote';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <section className='quotes'>
        <SelectedQuote />
        <AuthorList />
        </section>
    </div>
  );
}

export default connect()(App);