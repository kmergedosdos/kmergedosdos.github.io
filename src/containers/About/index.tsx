import "./index.css";
import TECHS from "./techs.json";
import profilePhoto from "../../assets/kmerge_id.jpg";
import TechTile from "../../components/TechTile";

function About() {
  const profYears = new Date().getFullYear() - 2021;

  return (
    <section className="about" id="about">
      <h2 className="about__header">A bit about me</h2>
      <div className="about__content">
        <div className="about__content__text">
          <p className="about__content__text__body">
            I’m a full-stack engineer focused on building production-grade
            applications that are scalable, maintainable, and designed for
            real-world use.
          </p>
          <p className="about__content__text__body">
            Over the past {profYears} years, my work has evolved from developing
            business websites to architecting complex systems, including
            real-time platforms and API-driven applications.
          </p>
          <p className="about__content__text__body">
            I specialize in frontend architecture using Next.js and React,
            building reusable systems that improve development speed and
            scalability, while working across backend services to deliver
            complete, end-to-end solutions.
          </p>
          <p className="about__content__text__body">
            Here's some of the skills and technologies I work with:
          </p>
        </div>
        <div className="about__content__image">
          <img src={profilePhoto} alt="Profile" />
        </div>
      </div>
      <div className="about__skills">
        <div className="about__skills__content">
          {TECHS.flatMap((category) => category.technologies).map((tech) => (
            <TechTile key={tech} title={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
