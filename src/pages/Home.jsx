import searchIcon from "../assets/magnifying-glass.svg"
import homeIcon from "../assets/house.svg"
import filmIcon from "../assets/film-slate.svg"
import monitorIcon from "../assets/monitor.svg"
import trendIcon from "../assets/trend-up.svg"
import plusIcon from "../assets/plus.svg" 
import './home.css';
import JanaGana from "../assets/jana.png"
import Moviecard from "../components/MovieCard"



<body>

  <div className="sidebar">
      <img src={searchIcon} alt="searchIcon" />
      <img src={homeIcon} alt="homeIcon" />
      <img src={filmIcon} alt="filmIcon" />
      <img src={monitorIcon} alt="monitorIcon" />
      <img src={trendIcon} alt="trendIcon" />
      <img src={plusIcon} alt="plusIcon" />
      
    </div>
    </body>





function Home() {
  return (
    <div className="netflix">
    <div className="sidebar">
      <img src={searchIcon} alt="searchIcon" />
      <img src={homeIcon} alt="homeIcon" />
      <img src={filmIcon} alt="filmIcon" />
      <img src={monitorIcon} alt="monitorIcon" />
      <img src={trendIcon} alt="trendIcon" />
      <img src={plusIcon} alt="plusIcon" />
    </div>


    <div className="main">
      <div className="hero">
        <img src={JanaGana} alt="" />
        <p>Rating :10/10</p>
        <p>2M streams</p>
        <div className="h-button">
          <button className="b1">
            Play 
          </button>
          <button className="b2">Watch Trailer</button>
        </div>
      </div>

        <Moviecard Mtitle="New Releases" />
        <Moviecard Mtitle="Trending" />
       

      </div>
      </div>
  );
}

    export default Home;