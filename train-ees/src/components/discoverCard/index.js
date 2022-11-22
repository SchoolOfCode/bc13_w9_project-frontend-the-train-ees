
import './index.css'

let image = "data:image/png;base64,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"
export default function DiscoverCard({info}){
    console.log(info)
    if(Object.keys(info).length === 0){  // display default
        return (
            <div className='discoverCard'>
                <div className='cardHeader'>
                    <h1>first name <strong>last name</strong></h1>
                </div>
                <div className='cardBody'>
                    <h2>linkedin link</h2>
                    <h2>github handle</h2>
                    <h2>phone number</h2>
                    <h2>email address</h2>
                    <img src={image} alt="profile pic" />
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