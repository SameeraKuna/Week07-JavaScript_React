import "./ProfileCard.css"
export default function ProfileCard(){
    return(
        <div className="profileCard">
            <img className="avatar" src="src/assets/Sam.JPG" alt="Profile Pic" />
        <h1 className="name">Sameera Kuna</h1>
        <h3 className="title">React Developer</h3>
        <p className="bio">An aspiring React developer in full stack development</p>
        <div className="links">
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">LinkedIn</a>
        </div>
        </div>
    )
}