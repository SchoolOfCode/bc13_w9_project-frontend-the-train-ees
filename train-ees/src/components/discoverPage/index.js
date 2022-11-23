import "./index.css";
import Button from "../button";
import DiscoverCard from "../discoverCard";
import { useState } from "react";
//import backgroundGif from '../images/purple_BG.gif'

export default function DiscoverPage({ handleClick }) {
  const [cards, setCards] = useState([{}]);
  const [userData, setUserData] = useState(null);

  async function getCards(input) {
    //console.log(input)
    let response = await fetch(
      `http://localhost:3000/api/cards?name=${input}`,
      {
        method: "GET",
        headers: {},
      }
    );
    let data = await response.json();
    setCards(data.payload);
  }

  async function handleKeyDown(e) {
    // enter pressed on input
    if (e.key !== "Enter") {
      return;
    }
    let input = e.target.value;
    if (input === "" || input === " ") {
      return;
    }
    await getCards(input);
  }

  async function pressLogIn() {
    if (userData === null) {
      const emailInput = prompt("Enter your email");
      let response = await fetch(
        `http://localhost:3000/api/cards/?email=${emailInput}`,
        {
          method: "GET",
          headers: {},
        }
      );
      let data = await response.json();
      if (data.payload === undefined) {
        alert("This email doesn't have a card");
      } else {
        let correctPass = data.payload.password;
        let logInData = await data.payload;
        const guessPass = prompt("Enter your password");
        if (correctPass === guessPass) {
          setUserData(logInData);
        } else {
          alert("Wrong password");
        }
      }
    } else {
      setUserData(null);
    }
  }

  if (userData === null) {
    return (
      <div className="discoverPage">
        <div className="discoverBody">
          <div className="discoverTitle">
            <h1>Discover Cards</h1>
          </div>
          <div className="discoverTitle2">
            <h2>Network with your peers!</h2>
          </div>
          <div className="discoverBodyText">
            <p>Create a card so fellow bootcampers can find you.</p>
            <p>Search for a bootcamper and connect with them.</p>
          </div>
          <div className="searchInput">
            <input
              type="text"
              className="inputSearch"
              placeholder="Search By Name"
              onKeyDown={async (e) => {
                await handleKeyDown(e);
              }}
            />
          </div>
        </div>
        <div className="cardDisplay">
          <div className="createBtn">
            <Button handleClick={handleClick} buttonText={"+ New Card"} />
            <Button handleClick={pressLogIn} buttonText={"Log In and Edit"} />
          </div>
          <div className="discoverCardContainer">
            {cards.map((card, i) => (
              <DiscoverCard key={i} info={card} />
            ))}
          </div>
        </div>
        <div className="whiteBg"></div>
        {/* <footer className='space'></footer> */}
      </div>
    );
  } else {
    return (
      <div className="discoverPage">
        <div className="discoverBody">
          <div className="discoverTitle">
            <h1>Discover Cards</h1>
          </div>
          <div className="discoverTitle2">
            <h2>Network with your peers!</h2>
          </div>
          <div className="discoverBodyText">
            <p>Create a card so fellow bootcampers can find you.</p>
            <p>Search for a bootcamper and connect with them.</p>
          </div>
          <div className="searchInput">
            <input
              type="text"
              className="inputSearch"
              placeholder="Search By Name"
              onKeyDown={async (e) => {
                await handleKeyDown(e);
              }}
            />
          </div>
          <div className="loggedInUser">
            <DiscoverCard key={1000} info={userData} />
          </div>
        </div>

        <div className="cardDisplay">
          <div className="createBtn">
            <Button handleClick={handleClick} buttonText={"+ New Card"} />
            <Button handleClick={pressLogIn} buttonText={"Log Out"} />
          </div>
          <div className="discoverCardContainer">
            {cards.map((card, i) => (
              <DiscoverCard key={i} info={card} />
            ))}
          </div>
        </div>
        <div className="whiteBg"></div>
      </div>
    );
  }
}
