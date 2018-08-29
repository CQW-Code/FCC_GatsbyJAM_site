import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello!</h1>
    <p>Welcome to my first Gatsby site.</p>
    <p>Here is a little about who I am:</p>
    <ul>
      <li>I have many many years exeperience as a QA Tester- in Mainframe</li>
      <li>Recent graduate from DevPoint Labs in Utah with a certificate in Web Development.</li>
      <li>I'm from North Carolina</li>
      <li>I'm actively looking for work- entry level/junior Developer (Web or even mainframe!); Open to QA</li>
    </ul>
    <Link to="/page-2/"><button className='linkButton'>More about me</button></Link>
  </div>
)

export default IndexPage
