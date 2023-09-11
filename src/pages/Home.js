import Header from '../js/components/Header'
import MainHome from '../js/components/MainHome'
import Footer from '../js/components/Footer'
import Sidebar from '../js/components/Sidebar'
import DataExchange from '../js/components/FethExchange'



export default function Home() {
  
  return (
    <div className='container'>
    <Header/>
    <MainHome/>
    <Sidebar sidebarContent={DataExchange()}/>
    <Footer/>
    </div >
  )
}