import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { center, container } from '../../../styled-system/patterns'

export default function Privacy() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={container({p: 16, maxWidth: "3xl"})}>
      Privacy Policy for Dear Stranger
      <br/>
      <br/>
      At Dear Stranger, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Dear Stranger and how we use it.
      <br/>
      <br/>
      1. How we use your information
      <br/>
      - Provide, operate, and maintain our website      <br/>
      - Improve, personalize, and expand our website <br/>
      - Understand and analyze how you use our website <br/>
      - Develop new products, services, features, and functionality <br/>
      - Send you emails <br/>
      - Find and prevent fraud <br/>
      <br/>
      2. Cookies and Web Beacons
      <br/>
      Like any other website, Dear Stranger uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.      <br/>
      {/* <br/>
      3. Google DoubleClick DART Cookie
      <br/>
      Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL - https://policies.google.com/technologies/ads */}
      </div>
      <Footer></Footer>
    </div>
  )
}
