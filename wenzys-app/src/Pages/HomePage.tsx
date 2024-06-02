import '../App.css'
import Company from '../components/Company/Company'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function HomePage() {

  return (
    <>
      <div className='container'>
      <Header />
      <Company />
      <Footer />
      </div>
    </>
  )
}

export default HomePage
