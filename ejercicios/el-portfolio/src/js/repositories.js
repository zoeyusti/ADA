import React, { Component } from 'react';

class Repositories extends Component {
	constructor(props){
		super(props);

		this.state = {
			repos:[]
		}

	}



  componentDidMount() {
    fetch('https://api.github.com/users/zoeyusti/repos')
      .then(function(respuesta) {
        return respuesta.json();
      })




      .then(function(repos) {
        //console.log(repos);
        return repos.map(function(git) {
          return {'name': git.full_name, 'url': git.html_url, 'id': git.id, 'user': git.owner.login, 'userurl': git.owner.html_url, 'commits': git.commits_url, 'avatar': git.owner.avatar_url}
        });
      })
      .then(repos => this.setState({repos}));
  }


	render(){
		return(

			<div id="repos">

				<h1>Repos y eso va acá</h1>

					{this.state.repos.map(git =>
						<div id="reposkey" key={git.id}>

							{/*<h3><a href= {git.userurl}>{git.user}</a></h3>*/}
							<ul>
							{/*Warning: Each child in an array or iterator should have a unique "key" prop.*/}
							{/*<h3>{git.name}</h3>*/}
								<li> <img src={git.avatar} alt="avatar"/> <a href={git.url}>{git.name}</a></li>
							</ul>
						</div>

					)}

			</div>


		)
	}



}

export default Repositories;