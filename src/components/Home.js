import React, { useState } from 'react';
import SpaceDolphin from '../../assets/space_dolphin.png';
import ReactWheel from '../../assets/react_wheel.png';
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'


const Home = () => {

  const [inputText, setInputText] = useState("Happy Hacking.")

  return (
    <div className="main_container">
      <NavBar />
      <div className="space_dolphin_container">
        <img className="space_dolphin" src={SpaceDolphin} />
      </div>
      <div className="react_wheel">
        <img src={ReactWheel} />
      </div>
      <div>
        <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} className="happy_hacking" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
