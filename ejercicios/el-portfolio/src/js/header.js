import React, { Component } from 'react';

class Header extends Component {
	header(){
	}

	render(){
		return(

			<div id="header">
				<h1>HOOOOLIIIIIS Este es el portfolio</h1>
				<div className="media">
					<a href="https://www.github.com"><img src="github-icon.png" alt="github-page"/></a>
					<a href="https://www.twitter.com"><img src="twitter-icon.png" alt="twitter-page"/></a>
					<a href="https://www.facebook.com"><img src="facebook-icon.png" alt="facebook-page"/></a>
				</div>
			</div>


			)
	}



}

export default Header;