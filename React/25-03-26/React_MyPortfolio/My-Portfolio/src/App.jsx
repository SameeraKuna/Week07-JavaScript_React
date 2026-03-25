import "./App.css";
import samImage from "./assets/Sam.JPG";

function App() {
  return (
    <>
      <header>
        <h1>
          <u>Kuna Sai Sameera</u>
        </h1>

        <p id="role">
          <strong>Full Stack Developer Intern in GSS</strong>
        </p>

        <nav id="navigation">
          <a href="#about">About</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>
        </nav>

        <img src={samImage} alt="Sameera" id="img" />

        <div className="about">
          <h3 id="about">
            <em>About :</em>
          </h3>

          <p className="aboutme">
            I am a Cloud Engineer with hands-on experience in AWS services
            including EC2, S3, IAM, VPC, ELB, and Auto Scaling. I hold a B.Tech in
            Electrical and Electronics Engineering and have strong skills in
            SQL, Python, Power BI, and Tableau.
            <br />
            <br />
            After dedicating time to UPSC preparation, which enhanced my
            analytical thinking and discipline, I transitioned into the cloud
            domain through a one-year AWS apprenticeship. During this period, I
            gained practical experience in deploying, managing, and
            troubleshooting cloud infrastructure.
          </p>
        </div>
      </header>

      <main>
        <h3 id="projects">
          <em>Projects :</em>
        </h3>

        <ol className="myprojects">
          <li>
            <q>Static Website Hosting – 2024</q>
          </li>
          <p>
            Hosted a static HTTPS website using AWS tools such as S3 buckets,
            Route53, CloudFront, Certificate Manager
          </p>

          <li>
            <q>Static and Dynamic Routing – CCNA Mini Project – 2024</q>
          </li>
          <p>
            Designed a WAN for a corporate client operating multiple offices
            within a city.
            <br />
            Routing Methods used: Static, Backup, Dynamic (RIP &amp; EIGRP)
          </p>

          <li>
            <q>Process Flow &amp; Energy Auditing in Nellimarla Jute Mills – 2018</q>
          </li>
          <p>
            Full Semester Internship, Nellimarla Jute Mills Co. Ltd,
            Vizianagaram.
            <br />
            Study of process flow, electrical systems, machinery. Audited
            machinery and ruled out energy conservation possibilities.
          </p>

          <li>
            <q>Automatic Agricultural Robot</q>
          </li>
          <p>
            The robot can substitute the work of a human in sowing the seeds as
            its main application.
          </p>
        </ol>

        <h3 id="contact">
          <em>Contact :</em>
        </h3>

        <div className="contact">
          <blockquote>
            <strong>Phone :</strong> 123-456-789
            <br />
            <strong>Email :</strong> sameera@gss.in
            <br />
            <strong>Location :</strong> Bangalore, India.
          </blockquote>
        </div>
      </main>

      <footer>
        <h3>Sameera Kuna</h3>
        <p>Full Stack Developer Intern</p>
        <br />
        <div className="foot_a">
          <a href="https://www.linkedin.com/in/sameerakuna/" target="_blank">
            <strong>LinkedIn</strong>
          </a>

          <a href="https://github.com/dashboard" target="_blank">
            <strong>GitHub</strong>
          </a>

          <a href="#about">About</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>

          <br />
          <br />

          <a href="#top">Go‑Top</a>
        </div>

        <hr />

        <p style={{ color: "black" }}>
          <strong>
            <em>"Open to opportunities | Let’s connect!"</em>
          </strong>
        </p>

        <blockquote>© 2026 Sameera Kuna. All rights reserved.</blockquote>
      </footer>
    </>
  );
}

export default App;