import React, { Component } from 'react'
import Effect from '../components/Effect'
import Header from '../components/Header'

export default ({ component: Component, ...rest }) => {
  return (
    <div>
      <Header/>
      <Effect>
        <Component {...rest} />
      </Effect>
    </div>
  )
}