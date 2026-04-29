import "./index.css";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!form.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          alert("Message sent!");
          form.current?.reset();
          setIsLoading(false);
          onSuccess?.();
        },
        (error) => {
          console.error(error);
          alert("Failed to send");
          setIsLoading(false);
        },
      );
  };

  return (
    <div className="contact-form__container">
      <h3 className="contact-form__header">Send a message</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project & goals..."
            required
          />
        </div>
        <input
          type="submit"
          value={isLoading ? "Sending..." : "Send"}
          disabled={isLoading}
          className="btn btn--contained"
        />
      </form>
    </div>
  );
}
