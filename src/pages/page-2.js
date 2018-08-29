import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
    <div>
      <h1>Where to contact me</h1>
      <p><Link to="https://github.com/CQW-Code" target='_blank' rel='noopener noreferrer'>GitHub</Link></p>
      <p><Link to='https://www.linkedin.com/in/christopherqwatkin/'>LinkedIn</Link></p>
      <p> Resume...Coming soon!</p>
      <p>Oh yes... I absolutely love to learn!</p>
  
    <Link to="/"><button className='linkButton'>Home Page</button></Link>
  </div>
)

export default SecondPage
