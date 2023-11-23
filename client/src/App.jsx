import Menu from "./assets/components/Menu";
import Footer from "./assets/components/Footer";
import "./App.css";
import { useState } from "react";
function App() {

  const [name, setName] = useState('SOCIAL MENU');



  return (

    <div className='mx-auto container bgimage fonts'>
      <div className="grid grid-cols-12 mb-2">
        <img src="/img/casual.png" alt="casual logo" className="col-span-3 pt-5" />
      </div>
      <Menu></Menu>
      <Footer></Footer>
    </div>


  )
}

export default App;
