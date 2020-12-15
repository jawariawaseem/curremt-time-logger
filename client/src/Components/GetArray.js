import React, { useState } from 'react';

const GetArray = () => {
	const [ arraySize, setArraySize ] = useState(0);
	var array = [];
	for (var i=0, t=arraySize; i<t; i++) {
		array.push(Math.round(Math.random() * t));
	}
	var formattedArray = array.toString();

	const getLargestValue = (array) => {
		array = [-2,-1,-4,-6,-3,-7]
		let largest = array[0];
		let secondLargest = array[0];
		for(var i=0; i<array.length; i++){
			if(array[i] > largest){
				secondLargest = largest
				largest = array[i];
			}
			if(array[i] > secondLargest && array[i] !== largest){
				secondLargest = array[i];
			}
		}
		return [largest,secondLargest];
	}
	return(
		<div className="array">
			<p>Find largest and second largest element of array!</p>
			<input placeholder="Size of array" type="text" onChange={(e) => {setArraySize(e.target.value)}}/>
			<br></br>
			<p>{formattedArray}</p>{
				getLargestValue(array).map((value,index) => { return(<h3 key={index}>{value}</h3>) })
			}
		</div>
		);
}

export default GetArray;