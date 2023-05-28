import React from 'react'
import Hero from './component/Hero'
import Sales from './component/Sales'
import { heroapi } from './data/Data'
import { popularsales } from './data/Data'
import { toprateslaes } from './data/Data'
import { highlight } from './data/Data'
import { sneaker } from './data/Data'
import Flex from './component/Flex'
import Top_stories from './component/Top_stories'
import { story } from './data/Data'
import Footer from './component/Footer'
import { footerAPI } from './data/Data'
import Navbar from './component/Navbar'
import Cart from './component/Cart'
const App = () => {
  return (
    <>  
       <Navbar/>
       <Cart/>
        <main className='flex flex-col gap-16 relative '>
             <Hero heroapi={heroapi}/>
             <Sales endpoints={popularsales} ifExists/>
             <Flex endpoint={highlight} ifExists/>
             <Sales endpoints={toprateslaes}/>
             <Flex endpoint={sneaker} />
             <Top_stories endpoint={story} />
        </main>
        <Footer endpoint={footerAPI} />
    </>
  )
}

export default App
