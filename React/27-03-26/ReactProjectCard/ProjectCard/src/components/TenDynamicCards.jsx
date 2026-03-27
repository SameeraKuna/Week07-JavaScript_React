import "./TenDynamicCards.css"
export default function TenDynamicCards(DataParameter){
    return(
        <div className="profileCard">
            <img className="avatar" src={DataParameter.src} alt="Profile Pic" />
        <h1 className="name">{DataParameter.name}</h1>
        <h3 className="title">{DataParameter.role}</h3>
        <p className="bio">{DataParameter.intro}</p>
        <div className="links">
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
        </div>
        </div>
        
    )
}