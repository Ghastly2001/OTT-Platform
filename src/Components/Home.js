import React from 'react'
import ImgSlider from './ImgSlider'
import Row from './Row'
import requests from './Requests';
import "./Home.css"
import Footer from './Footer';


function Home() {
    return (
         <div>
            <ImgSlider/>
              <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
             />

             <Row    
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
                
             />
             <Row 
                title="Top Rated"
                fetchUrl={requests.fetchTopRated}
                
             />

             <Row 
                title="Action Movies"
                fetchUrl={requests.fetchActionMovies}
                isLargeRow
             />
             <Row 
                title="Comedy Movies"
                fetchUrl={requests.fetchComedyMovies}
                
             />
             <Row 
                title="Horror Movies"
                fetchUrl={requests.fetchHorrorMovies}
                
             />
             <Row 
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
                isLargeRow
                
             />
             <Row 
                title="Documentaries"
                fetchUrl={requests.fetchDocumentaries}
                
             />
                <Footer/>
             </div>
          
        
    )
}

export default Home