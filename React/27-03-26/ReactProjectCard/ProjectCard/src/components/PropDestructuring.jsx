import "./PropDestructuring.css"
export default function PropDestructuring({name, role, intro, src}){
    return(
        <div className="profileCard">
            <img className="avatar" src={src} alt="Profile Pic" />
        <h1 className="name">{name}</h1>
        <h3 className="title">{role}</h3>
        <p className="bio">{intro}</p>
        <div className="links">
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
        </div>
        </div>
        
    )
}