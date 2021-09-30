import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <>
      <Header />
      {/* eslint-disable-next-line react/prop-types */}
      <main className="mt-5"> {props.children}</main>
      <Footer />
    </>
  )
}
export default Layout
