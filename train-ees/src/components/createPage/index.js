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
        let response = await fetch("http://localhost:3000/api/", {
            method: "POST",
            body: {
                firstName: firstName,
                lastName: lastName,
                linkedin: linkedin,
                github: github,
                phone: phone,
                email: email,
                image: image
            }
        })
        handleClickSubmit()
        return response.json()
    }

    return(
        <div className="CreatePage">
            <h1>Create Cards</h1>
            <div className="CreateBody">
                <h2>Network with your peers!</h2>
                <p>Create a card so fellow bootcampers can find you.</p>
                <p>Search for a bootcamper and connect with them.</p>
            </div>
            <Button handleClick={handleClick} buttonText={'Submit'} />
            <CreateCard firstNameChange={setFirstName}
                        lastNameChange = {setLastName}
                        linkedinChange = {setLinkedin}
                        githubChange = {setGithub}
                        phoneChange = {setPhone}
                        emailChange = {setEmail}
                        imageChange = {setImage}
            />
        </div>
    )
}