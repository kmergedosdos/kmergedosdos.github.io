import "./index.css";

function Home() {
  return (
    <section className="home" id="home">
      <code>Full-Stack Engineer • Systems Architecture</code>
      <h1 className="home__header">Kmerge Dosdos</h1>
      <h4 className="home__subheader">
        I architect and ship production-grade, API-driven applications – from
        logic to experience.
      </h4>
      <div className="home__cta">
        <a href="#work" style={{ width: "fit-content" }}>
          <button className="btn btn--contained">View my work</button>
        </a>
        <a href="#contact" style={{ width: "fit-content" }}>
          <button className="btn">Get in touch</button>
        </a>
      </div>
      <div className="home__proof">
        <p>
          <span>✦</span> Built platforms serving 20K+ users • Led 3–5 person
          engineering teams
        </p>
      </div>
    </section>
  );
}

export default Home;
