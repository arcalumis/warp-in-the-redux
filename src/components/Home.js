import React, { useState } from 'react';
import SpaceDolphin from '../../assets/space_dolphin.png';
import ReactWheel from '../../assets/react_wheel.png';
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { fetchUserData } from '../actions/user'


const Home = (props) => {

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
      <div style={{ color : '#FFF', marginBottom: '20px' }}>{props.firstName} {props.lastName}</div>
      <div style={{ marginBottom: '20px' }}>
        <button className="happy_hacking" onClick={()=>{props.fetchUserData()}}>Fetch User Data</button>
      </div>
      <div>
        <input type="text" value={inputText} onChange={(e)=>{setInputText(e.target.value)}} className="happy_hacking" />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  firstName : state.user.firstName,
  lastName : state.user.lastName,
})

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(fetchUserData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
