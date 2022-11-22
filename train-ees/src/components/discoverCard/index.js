
import './index.css'
import email from '../images/email.png'
import phone from '../images/phone.png'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import user from '../images/user.png'

export default function DiscoverCard({info}){
    console.log(info)
    if(Object.keys(info).length === 0){  // display default
        return (
            <div className='discoverCard'>
                <div className='cardHeader'>
                    <h1>first name <strong>last name</strong></h1>
                </div>
                <div className='cardBody'>
                    <div className='mediaItems'>
                        <div className='linkedin'>
                            <img src={linkedin} alt="linkedin"/><h2>linkedin link</h2>
                        </div>
                        <div className='github'>
                            <img src={github} alt="github"/><h2>github handle</h2>
                        </div>
                        <div className='phone'>
                            <img src={phone} alt="phone"/><h2>phone number</h2>
                        </div>
                        <div className='email'>
                            <img src={email} alt="email"/><h2>email address</h2>
                        </div>
                    </div>
                    <div className="profilePicture">
                        <img src={user} alt="profile pic" />
                    </div>
                </div>
            </div>
        )

    }else{
        return(
            <div className='discoverCard'>
                <div className='cardHeader'>
                    <h1>{info.firstName} <strong>{info.lastName}</strong></h1>
                </div>
                <div className='cardBody'>
                    <h2>{info.linkedin}</h2>
                    <h2>{info.github}</h2>
                    <h2>{info.phone}</h2>
                    <h2>{info.email}</h2>
                    <img src={info.image} alt="profile pic"/>
                </div>
            </div>
        )
    }

}