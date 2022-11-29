import { useState } from "react";
import "./index.css";
import CreateCard from "../createCard";
import Button from "../button";
import React from "react";
import env from "react-dotenv";

export default function CreatePage({ handleClickSubmit }) {

  const [cardInfo, setCardInfo] = useState({ 
    first_name : "",
    last_name : "",
    linkedin_username : "",
    github_username : "",
    phone : "",
    email : "",
    image : "",
    profession : "",
    password : ""
})

  async function handleClick() {
    let response = await fetch(`${env.URL}/api/cards`, {
      method: "POST",
      body: JSON.stringify(cardInfo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    handleClickSubmit();
    let data = await response.json();
    return await data.success;
  }

  return (
    <div className="discoverPage">
      <div className="discoverBody">
        <div className="discoverTitle">
          <h1>Create Cards</h1>
        </div>
        <div className="discoverTitle2">
          <h2>Network with your peers!</h2>
        </div>
        <div className="discoverBodyText">
          <p>Create a card so fellow bootcampers can find you.</p>
          <p>Search for a bootcamper and connect with them.</p>
          <div className="backButton">
            <Button handleClick={handleClickSubmit} buttonText={"Back"} />
          </div>
        </div>
      </div>
      <div className="cardDisplay">
        <div className="createBtn">
          <Button
            handleClick={async () => {
              await handleClick();
            }}
            buttonText={"Submit"}
          />
        </div>
        <div className="discoverCardContainer">
          <CreateCard
            cardInfoChange={setCardInfo}
            cardInfo = {cardInfo}
          />

        </div>
      </div>
    </div>
  );
}