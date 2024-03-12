import Skills from "../components/Skills";
import { Footer } from "../layouts/Footer";
import { Navigation } from "../layouts/Navigation";
import "../styles/about.css";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <div className="wrapper">
        <Helmet>
          <title>About</title>
          <meta
            name="description"
            content="Web developer specializing in Ruby on Rails/React.js"
          />
        </Helmet>
        <Navigation page="about" />
        <div className="about">
          <div className="copy">
            <h1>About</h1>
            <p>
              I am a humanist turned developer, specializing in Ruby on Rails
              and React.
            </p>
            <p>
              I love learning new things, applying my background in research and
              formal logic to solve problems, and running very long distances
              with my{" "}
              <span role="img" aria-label="dog">
                &#128021;
              </span>
              .
            </p>
          </div>
          <div>
            <p className="skillset">My current skillset includes:</p>
            <Skills />
          </div>
          <div className="contact">
            <h3>Want to get in touch?</h3>
            <div className="email">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill=""
                  d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                />
              </svg>
              <span className="obfuscate">
                alisa<span>null</span>.wandzilak<span>null</span>&#64;
                <span>null</span>gmail<span>null</span>.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

//<img className="avatar" src="src/assets/avatar.png" alt="memoji" />
