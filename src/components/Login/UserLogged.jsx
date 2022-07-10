import React from 'react'

const UserLogged = ({logOut}) => {
  
  return (
    <article>
      <i className="fa-solid fa-user-check"></i>
      <h2>User Logged</h2>
      <button onClick={logOut}>Log Out</button>
    </article>
  )
}

export default UserLogged