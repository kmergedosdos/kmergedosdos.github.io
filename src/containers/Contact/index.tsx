import Modal from "../../components/Modal";
import { useState } from "react";
import "./index.css";
import ContactForm from "../../components/ContactForm";

function Contact() {
  const [showForm, setShowForm] = useState(false);

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
        Reach out at <a href="mailto: kpdosdos@gmail.com">
          kpdosdos@gmail.com
        </a>{" "}
        <br />
        or send a quick message below.
      </p>
      <br />
      <button className="btn" onClick={() => setShowForm(true)}>
        Send a message
      </button>
      <Modal open={showForm} onClose={() => setShowForm(false)}>
        <ContactForm onSuccess={() => setShowForm(false)} />
      </Modal>
    </section>
  );
}

export default Contact;
