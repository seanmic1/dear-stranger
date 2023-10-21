import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Fail from '../components/Fail'
import { center, container } from '../../../styled-system/patterns'
import { css } from '../../../styled-system/css'
import Link from 'next/link'

export default function FailPage() {
  return (
    <>
    <Navbar></Navbar>
    <div className={container({ maxW: "4xl" })}>
      <p className={css({ fontSize: "3xl", textAlign: "center", p: "8", mt:"16" })}>
        System has detected toxic content. <br/> Please refrain from using negative language.
      </p>
      <Link href="/">
        <div
          className={center({
            m:"20",
            padding: "2",
            rounded: "md",
            background: "amber.300",
            border: "2px solid transparent",
            boxSizing: "border-box",
            _hover: {
              border: "2px solid black",
            },
            color: "black",
          })}
        >
          Back to home
        </div>
      </Link>
    </div>
    <Footer></Footer>
    </>
  )
}
