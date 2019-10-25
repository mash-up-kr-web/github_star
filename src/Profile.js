import React from 'react';

const Profile = ({user}) => {
  console.log(user)
  return (
    <div>
        <div className="row">
          {/* <div className="col-md-4"> */}
            <div className="card" style={{witdt : "18rem"}}>
            <ul className="list-group list-group-flush">
              <img className="card-img-top" src={user.avatar_url} />
              <li className="list-group-item">
                Repository:
                <span className="badge badge-success">{user.public_repos}</span>
              </li>
              <li className="list-group-item">
                followers:
                <span className="badge badge-primary">{user.followers}</span>

              </li>
              <li className="list-group-item">
                following:
                <span className="badge badge-info">{user.following}</span>

              </li>
            </ul>
            <div className="card-body">
              <a href={user.html_url} className="btn btn-success btn-block">
              해당 깃헙 페이지로 이동
              </a>
            </div>
            </div>
          </div>
        {/* </div> */}
      </div>
  )
  
}

export default Profile
