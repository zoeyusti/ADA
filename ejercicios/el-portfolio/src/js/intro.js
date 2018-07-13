import React, { Component } from 'react';

class Intro extends Component {
	intro(){
	}

	render(){
		return(

			<div id="intro">

				{/*<h1>Nombres y eso va acá</h1>*/}
				<img src="keep-calm.jpg" alt="foto"/>
				<div className="info">
					<h1>Fulano de Tal</h1>
					<h3>Nerd, muy poco serio</h3>
					<p>Edad: xx</p>
					<p>Dirección: Calle Falsa 123</p>
					<p>Email: contacto@dominio.com</p>
					<p>Referente: Mengano y Zutano</p>
				</div>

			</div>


			)
	}



}

export default Intro;