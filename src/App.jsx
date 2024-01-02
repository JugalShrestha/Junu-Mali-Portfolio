import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import PageHeader from "./components/PageHeader"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import ArtPage from "./pages/ArtPage"
import { useRef } from "react"

const App = () => {
  
  const homePageRef = useRef(null);
  const workPageRef = useRef(null);
  const contactPageRef = useRef(null);
  return (
    <>
    <Navbar scrollToComponent={{homePageRef,workPageRef,contactPageRef}}/>
    <Home ref={homePageRef}/>
    <PageHeader ref={workPageRef} name={"~ Gallery ~"}/>
    <Gallery/>
    <PageHeader ref={contactPageRef} name={"~ contact ~"}/>
    <Contact/>
    <Routes>
      <Route path="/" element=""/>
      <Route path="/art" element={<ArtPage/>}/>
    </Routes>
    </>
  )
}

export default App