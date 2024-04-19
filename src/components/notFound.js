import React,{Link} from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>Sorry the page you are trying to reach does not exist.</h2>
      <p>Go to link <Link to="/">HomePage</Link> </p>
    </div>
  )
}

export default NotFound
