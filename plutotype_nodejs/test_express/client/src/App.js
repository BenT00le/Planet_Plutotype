import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

/*react componets must have imports named with the first letter upper case
for them to work as a tag <Test/>*/
import Test from './Test.js';


function App(){


  /*use state can contain a more complex object*/
  //setUser may be able to query a DB and load relevent info?
  const [user, setUser] = useState({
    name:"usr",
    uuid:"jkfaokjdiofjodjfojo389u0230jdjsko",
    calendar:0
  });

  const [hit,setHit] = useState(false);

  return(
  /*
  in jsx this is how we would bring in stiling from a css file with .test in it
  <div className="test">
  */

  <div className="App">
    <h1>test</h1>
    <Test name = "monday" isHit = {hit} color = {'blue'}/>
    <Test name = "tusday" isHit = {hit} color = {'red'} />
    <Test name = "oneday" isHit = {hit} color = {'white'} />
    <Test name = "tdfsoday" isHit = {hit} color = {'green'}/>
    <Test name = "tue4ay" isHit = {hit} color = {'blue'}/>
    <Test name = "o34dfgday" isHit = {hit} color = {'red'}/>
    <Test name = "sunday" isHit = {hit} color = {'white'}/>
  </div>
  );
}


export default App;

