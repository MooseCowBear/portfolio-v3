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
          <img className="avatar" src="src/assets/avatar.png" alt="memoji" />
          <div className="copy">
            <h1>&#128075; Hello, I'm Alisa</h1>
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
            <p>
              My current skillset includes: Ruby, Ruby on Rails, React,
              JavaScript, TypeScript, Python, HTML, CSS, Tailwind CSS, RSpec,
              Capybara, Jest, SQL, git
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
