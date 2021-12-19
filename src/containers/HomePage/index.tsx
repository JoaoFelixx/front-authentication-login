import React from 'react'
import { 
  Header, 
  Content,
  GridAreas,
  CardAboutPage,
  Welcome,
  History, 
  Footer,
} from '../../components';

function HomePage() {
  return (
    <div>
      <Header />
      <GridAreas>
        <CardAboutPage />
        <Content />
        <Welcome />
        <History />
        <Footer />
      </GridAreas>
    </div>
  )
}

export default HomePage