
import './index.css'
import discoverCard from '../discoverCard'
import Button from '../button'
import {useState} from 'react'

export default function DiscoverPage(){
    const [cards, setCards] = useState([]);

    async function getCards(input){
        let response = await fetch(`http://localhost:3000/api/?search=${input}`, {
            method: 'GET',
            headers: {}
        });
        let data = await response.json();
        setCards(data)
    }

    function handleKeyDown(e){   // enter pressed on input
        if (e.key !== "Enter") {
            return
        }
        getCards(e.target.value)
    }
    
    return(
        <div className = "discoverPage">
            <h1>Discover Cards</h1>
            <div className="discoverBody">
                <h2>Network with your peers!</h2>
                <p>Create a card so fellow bootcampers can find you.</p>
                <p>Search for a bootcamper and connect with them.</p>
            </div>
            <Button handleClick={()=>{}} buttonText={'+ New Card'}/>
            <input type='text' placeholder="search by name" onKeyDown={handleKeyDown}/>
            {cards.map((card, i) => <discoverCard key={i} info={card}/>)}
        </div>
    )
}