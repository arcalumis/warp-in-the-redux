import React, { useState } from 'react';
import SpaceDolphin from '../../assets/space_dolphin.png';
import ReactWheel from '../../assets/react_wheel.png';
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { setTextOne, setTextTwo } from '../actions/textModifier'


const Home = (props) => {

  const [inputText, setInputText] = useState("Set Text To Redux State.")

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
        <input type="text" value={props.text_one} onChange={(e)=>{props.setTextOne(e)}} className="happy_hacking" />
      </div>
      <div>
        <input type="text" value={props.text_two} onChange={(e)=>{props.setTextTwo(e)}} className="happy_hacking" />
      </div>
      <div>
        <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} className="happy_hacking" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  text_one: state.text.text_one,
  text_two: state.text.text_two,
})

const mapDispatchToProps = dispatch => ({
  setTextOne: (e) => dispatch(setTextOne(e.target.value)),
  setTextTwo: (e) => dispatch(setTextTwo(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
