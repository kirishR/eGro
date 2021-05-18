import React from 'react'
import Header from '../Header'
import MenuHeader from '../MenuHeader'
import Footer from '../../components/Footer'
import Whatsapp from '../whatsapp'
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div>
        <Header />
        <MenuHeader />
        {props.children}
        <Whatsapp />
        <Footer />
    </div>
   )

 }

export default Layout