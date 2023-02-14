import React from 'react'
import Header from '../components/Header/Header'
import MainBody from '../components/MainBody/MainBody'

export default function Layout({children}) {
  return (
    <>
      <MainBody />
      
      {children}

    </>
  )
}
