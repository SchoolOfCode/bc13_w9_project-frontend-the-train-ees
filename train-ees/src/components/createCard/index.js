import './index.css'

export default function CreateCard(props){

    return(
        <div className='createCard'>
            <div className='cardHeader'>
                <input type='text' placeholder='first name' onChange={(e)=>{props.firstNameChange(e.target.value)}}/>
                <input type='text' placeholder='last name' onChange={(e) => {props.lastNameChange(e.target.value) }} />
            </div>
            <div className='cardBody'>
                <input type='text' placeholder='linkedin link' onChange={(e) => {props.linkedinChange(e.target.value) }} />
                <input type='text' placeholder='github' onChange={(e) => { props.githubChange(e.target.value) }} />
                <input type='text' placeholder='phone' onChange={(e) => { props.phoneChange(e.target.value) }} />
                <input type='text' placeholder='email' onChange={(e) => { props.emailChange(e.target.value) }} />
            
            </div>
        </div>
    )

}