import React from 'react'

const UserLogged = ({logOut}) => {
  
  return (
    <article>
      
      <button  className='b-logOut' onClick={logOut}><i className="fa-solid fa-door-open"></i> Log Out</button>
    </article>
  )
}

export default UserLogged