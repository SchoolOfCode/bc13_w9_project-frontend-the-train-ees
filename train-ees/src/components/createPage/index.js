import { useState } from 'react'
import './index.css'
import CreateCard from '../createCard'
import Button from '../button'

export default function CreatePage({ handleClickSubmit }){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [github, setGithub] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')

    async function handleClick() {
        /*console.log({
            first_name: firstName,
            last_name: lastName,
            linkedin_username: linkedin,
            github_username: github,
            phone: phone,
            email: email,
        })*/
        let response = await fetch("http://localhost:3000/api/cards", {
            method: "POST",
            body: JSON.stringify({
                "first_name": `${firstName}`,
                "last_name": `${lastName}`,
                "linkedin_username": `${linkedin}`,
                "github_username": `${github}`,
                "profession": "test",
                "phone": `${phone}`,
                "email": `${email}`,
                "image": `${image}`
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        handleClickSubmit()
        let data = await response.json()
        return await data.success;
    }

    

    return(
        <div className="discoverPage">
            <div className="discoverBody">
                <div className="discoverTitle">
                    <h1>Create Cards</h1>
                </div>
                <div className='discoverTitle2'>
                    <h2>Network with your peers!</h2>
                </div>
                <div className='discoverBodyText'>
                    <p>Create a card so fellow bootcampers can find you.</p>
                    <p>Search for a bootcamper and connect with them.</p>
                </div>
            </div>
            <div className='cardDisplay'>
                <div className='createBtn'>
                    <Button handleClick={handleClickSubmit} buttonText={'Back'} />
                    <Button handleClick={async()=>{await handleClick()}} buttonText={'Submit'} />
                </div>
                <div className='discoverCardContainer'>
                    <CreateCard firstNameChange={setFirstName}
                                lastNameChange = {setLastName}
                                linkedinChange = {setLinkedin}
                                githubChange = {setGithub}
                                phoneChange = {setPhone}
                                emailChange = {setEmail}
                                imageChange = {setImage}
                    />
                </div>
            </div>
        </div>
    )
}