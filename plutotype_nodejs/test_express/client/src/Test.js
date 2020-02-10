import React, {useState} from 'react';
import './App.css';

function Test({name, isHit, color})
{
	const [hitCount, setHit] = useState(0);
	const debug = () =>
	{
		console.log('debug '+hitCount);
		setHit(hitCount+1);
	};

	return( 
	<div className = 'test' style={{background: color}}>
		<h1> {hitCount} </h1>
		<button onClick={debug}>{name}</button>
	</div>
	);
}

export default Test;