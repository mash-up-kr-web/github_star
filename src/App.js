import React, { Component } from 'react';
import Navbar from 'Navbar';
import axios from 'axios';
import Profile from 'Profile';
import Repo from 'Repo';
class App extends Component {
  constructor(){
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id : "2198861e66aa854efd6935e20a368d1999884bc8",
        count : 7,
        sort: "created: asc"
      },
      user:[],
      repos:[]
    }
  }

  getUser = (e) => {
    const user = e.target.value;
    console.log('activated get user')
    const {url, client_id, client_secret, count, sort} = this.state.github;
    
    axios.get(
      `${url}/${user}?client_id=${client_id}`
    )
    .then(({data} ) => {
      this.setState({
        user: data
      })
    })

    axios.get(
      `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}`
    )
    .then(({data} ) => {
      this.setState({
        repos: data
      })
    })
  }
  renderProfile = () => {
    const { user, repos } = this.state;

    return(
      <div className="row">
        <div className="col-md-4">
          <Profile user={user} />
        </div>
        <div className="col-md-8">
        {
         repos.map((repo) => {
          return <Repo key={repo.name} repo={repo}/>
         }) 
        }
        </div>
      </div>
    )
    
  }

  render() {
    const {user} = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="card card-body">
            <h1>GitStar Ranking</h1>
            <p className="lead">
              Unofficial GitHub star ranking for users, organizations and repositories.
            </p>
              <input onChange={this.getUser} id="search" type="text" className="form-control" required />
          </div>
          {user.length !== 0 ? this.renderProfile(): null}
        </div>
      </div>
    );
  }
}

export default App;
