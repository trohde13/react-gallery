import {useState, useEffect} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryItem from '../GalleryItem/GalleryItem';
import './App.css';

function App() {

    const [galleryList, setGalleryList] = useState([]);
    const [galleryItem, newGalleryItem] = useState('');

    //on load
    useEffect(() => {
      getItems();
    }, []);

    //GET Function
    const getItems = () => {
      axios.get('/gallery')
        .then(response = {
          setGalleryList(response);
        }).catch(error => {
          alert('error getting gallery item');
          console.log(error);
        })
    }; //end getItems


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList
        galleryList={galleryList}
        />
        <img src="images/goat_small.jpg"/>
        <img src="images/Number7-JamesJoyce.jpg"/>
        <img src="images/CastleTrim.jpg"/>
        <img src="images/GDTatMia.jpg"/>
        <img src="images/BowieLastFiveYears.jpg"/>
        <img src="images/BowieRecord.jpg"/>
        <img src="images/QuestloveQuote.jpg"/>
        <img src="images/It2014.jpg"/>
        <img src="images/Uffda.jpg"/>
        <img src="images/DessaMNOrch2018.jpg"/>
        <img src="images/TopNine2019.jpg"/>
        <img src="images/ParisWedding2.jpg"/>
        <img src="images/ParisWedding1.jpg"/>
        <img src="images/ParisRings.jpg"/>
        <img src="images/Pompeii.jpg"/>
        <img src="images/Rome1.jpg"/>
        <img src="images/Room217.jpg"/>
        <img src="images/Family1.jpg"/>
        <img src="images/NewHouse1.jpg"/>
      </div>
    );
}

export default App;
