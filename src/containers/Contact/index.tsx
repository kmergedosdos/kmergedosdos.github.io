import "./index.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__header">Let's work together</h2>
      <p className="contact__body">
        Starting a project from scratch or scaling your existing product?{" "}
        <br className="contact__body__newline" />
        I build fast, scalable full-stack systems, with a focus on real-time and
        API-driven solutions.
        <br />
        <br />
        Reach out at{" "}
        <a
          href="mailto: kpdosdos@gmail.com"
          style={{ textDecoration: "underline" }}
        >
          kpdosdos@gmail.com
        </a>{" "}
        <br />
        or send a quick message below.
      </p>
      <br />
      <button className="btn">Drop a message</button>
    </section>
  );
}

export default Contact;
