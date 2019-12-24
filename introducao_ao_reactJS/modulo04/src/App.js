import React from 'react'
import './App.css'
import banner from './assets/images/tecno.png'
import TechList from './components/techList'

export default function App () {
  return (
    <>
      <h1>Ola mundo</h1>
      <img className='banner__container' src={banner} alt='banner' />
      <TechList />
    </>
  )
}
