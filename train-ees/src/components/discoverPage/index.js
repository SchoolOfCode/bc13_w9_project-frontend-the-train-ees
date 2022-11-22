
import './index.css'
import Button from '../button'
import DiscoverCard from '../discoverCard';
import {useState} from 'react'

export default function DiscoverPage({handleClick}){
    const [cards, setCards] = useState([{}]);

    async function getCards(input){
        let response = await fetch(`http://localhost:3000/api/cards?name=${input}`, {
            method: 'GET',
            headers: {}
        });
        let data = await response.json();
        console.log(data)
        setCards(data.payload)
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
            <Button handleClick={handleClick} buttonText={'+ New Card'}/>
            <input type='text' placeholder="Search By Name" onKeyDown={handleKeyDown}/>
            {cards.map((card, i) => (<DiscoverCard key={i} info={card}/>))}
        </div>
    )
}