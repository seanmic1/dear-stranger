import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { center, container } from '../../../styled-system/patterns'

export default function Terms() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={container({p: 16, maxWidth: "3xl"})}>
      Terms of Service for Dear Stranger
      <br/>
      <br/>
      These Terms of Use apply when you use service of the "Dear Stranger" website (“Service”).
      <br/>
      <br/>
      1. Registration and Access
      <br/>
      You may not make your access credentials or account available to others outside your organization, and you are responsible for all activities that occur using your credentials.
      <br/>
      <br/>
      2. Usage Requirements
      <br/>
      You may access the Service in accordance with these Terms. Sean Michael owns all rights, title, and interest in and to Dear Stranger.
      <br/>
      <br/>
      3. Restrictions
      <br/>
      You may not (i) use the Service in a way that infringes, misappropriates or violates any person&apos;s rights;
      (ii) use the Service as a way to promote personal services or products;
      <br/>
      <br/>
      4. Content
      <br/>
      All personal information you chose to write in letters or responses is your sole responsibility. Sean Michael will not be liable for the exposure of any personal information that you chose to write and expose to other users.

      </div>
      <Footer></Footer>
    </div>
  )
}
