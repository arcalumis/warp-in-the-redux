import React, { useState } from 'react';
import SpaceDolphin from '../../assets/space_dolphin.png';
import ReactWheel from '../../assets/react_wheel.png';
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions/counter'


const Home = (props) => {

  const [inputText, setInputText] = useState("Counter Example")

  return (
    <div className="main_container">
      <NavBar />
      <div className="space_dolphin_container">
        <img className="space_dolphin" src={SpaceDolphin} />
      </div>
      <div className="react_wheel">
        <img src={ReactWheel} />
      </div>
      <div style={{textAlign: "center"}}>
        <div className="happy_hacking">Counter: {props.count}</div>
        <div>
          <button className="happy_hacking" onClick={props.increment}>+</button>
          <button className="happy_hacking" onClick={props.decrement}>-</button>
        </div>
      </div>
      <div>
        <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} className="happy_hacking" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  count: state.count,
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
