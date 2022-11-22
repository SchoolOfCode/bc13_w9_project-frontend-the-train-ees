import "./index.css"

export default function button({handleClick, buttonText}){
    return <button onClick={handleClick}>{buttonText}</button>
}