import aavesham from "../assets/aavesham.jpeg"
import vaazha2 from "../assets/vaazha2.jpg"
import bku from "../assets/bku.jpeg"
import kanthara2 from "../assets/kanthara2.jpeg"
import manjumalaboys from "../assets/manjumalaboys.jpeg"
import lokah from "../assets/lokah.jpeg"
import sarvammaya from "../assets/sarvammaya.jpg"
import home from "../assets/home.jpg"
import imnobody from "../assets/imnobody.webp"
import premalu from "../assets/premalu.jpeg"
import luckybhaskar from "../assets/luckybhaskar.jpg"

import './movieCard.css'


function Moviecard ({Mtitle})  {

        return (

        <div>
           
           
           <h2 className="cardtitle">{Mtitle}</h2>
          
            
           
          
          <div className ="header1">
            <img src={aavesham} alt="Aavesham"/>
            <img src={vaazha2} alt="vaazha2"/>
            <img src={bku} alt="Bku"/>
            <img src={kanthara2} alt="Kanthara2"/>
            <img src={manjumalaboys} alt="Manjumalaboys"/>
            <img src={lokah} alt="Lokah"/>
            <img src={sarvammaya} alt="Sarvammaya"/>
            <img src={home} alt="Home"/>
            <img src={imnobody} alt="Imnobody"/>
            <img src={premalu} alt="Premalu"/>
            <img src={luckybhaskar} alt="Luckybhaskar"/>

          </div>

          
        

    </div>
    

        )
   }

   export default Moviecard


