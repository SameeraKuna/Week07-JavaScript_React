import "./PropDatatype.css"
export default function PropDatatype({name, role, intro, src, age=20, isPresent}){
    return(
        <div className="profileCard">
            <img className="avatar" src={src} alt="Profile Pic" />
        <h1 className="name">{name}</h1>
        <h2>{age}</h2>
        <h3 className="title">{role}</h3>
        <p className="bio">{intro}</p>
        {isPresent ? <p>Is Available</p>:<p>Is not Available</p>}
        <div className="links">
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
        </div>
        </div>
        
    )
}