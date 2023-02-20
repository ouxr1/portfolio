import React from 'react'
import './App.css'

import { Header,Container,Hero,About,Featured,Clients,Services,Projects,SectionContact,Footer} from './components/index'

export default function App() {
  return (
    <>
        <Header/>
        <Container>
          <Hero/>
          <About/>
          <Featured/>
          <Clients/>
          <Services/>
          <Projects/>
          <SectionContact/>
          <Footer/>
        </Container>
        
    </>
  )
}