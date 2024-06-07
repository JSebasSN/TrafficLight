import React from "react";
import { useState, useEffect } from "react";




const TrafficLight = () => {


	const [color, setColor] = useState('red')

	const handleClick = (light) => {
		setColor(light)
	}

	const colorRandom = () => {
		const lights = ['red', 'yellow', 'green']
		const randonLight = lights[(Math.floor(Math.random() * lights.length))]
		setColor(randonLight)
	}
	return (
		<>
			<div className="baseSema">
				<div className={`lightRed red ${color === 'red' ? 'active' : ''}`} onClick={() => handleClick('red')}>

				</div>
				<div className={`lightYellow yellow ${color === 'yellow' ? 'active' : ''}`} onClick={() => handleClick('yellow')}>

				</div>
				<div className={`lightGreen green ${color === 'green' ? 'active' : ''}`} onClick={() => handleClick('green')}>

				</div>
			</div>
			<button onClick={colorRandom}>Cambiar color</button>
		</>
	);
};

export default TrafficLight;
