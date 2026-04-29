import "./index.css";

import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY;

const MAX_MESSAGE_LENGTH = 1000;
const THRESHOLD = Math.ceil(MAX_MESSAGE_LENGTH * 0.8);

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [messageLength, setMessageLength] = useState(0);

  const showCharCount = messageLength > THRESHOLD;

  const handleCaptcha = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(e.target.value.length);
  };

  const sendEmail: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!form.current) return;

    // Block if captcha not completed
    if (!captchaToken) {
      alert("Please verify you're not a robot");
      return;
    }

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
            maxLength={100}
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
            maxLength={150}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <div className="message-input-wrapper">
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project & goals..."
              required
              maxLength={MAX_MESSAGE_LENGTH}
              onChange={handleMessageChange}
            />
            {showCharCount && (
              <span className="char-count">
                {messageLength}/{MAX_MESSAGE_LENGTH}
              </span>
            )}
          </div>
        </div>
        <ReCAPTCHA
          theme="dark"
          sitekey={RECAPTCHA_SITE_KEY}
          onChange={handleCaptcha}
        />
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
