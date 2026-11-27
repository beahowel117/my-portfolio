import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { ArrowUp, Send } from "lucide-react";
import "../styles/contact.css";

interface ContactProps {
  onBack: () => void;
  isMobile: boolean;
}

function Contact({ onBack, isMobile }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.message || "Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch {
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact</h2>

      <p className="contact-intro">
        Let's connect.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          aria-label="Name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />

        <input
          type="email"
          name="email"
          aria-label="Email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          aria-label="Message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />

        <button
          type="submit"
          className="contact-submit"
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send message"}
          <Send size={16} />
        </button>

        {status && (
          <p className="contact-status" role="status">
            {status}
          </p>
        )}
      </form>
      <button
          className="bubble-button"
          onClick={onBack}
        >
          <span>Return to surface</span>
          <ArrowUp size={20} className={isMobile ? "mobile-scroll-arrow" : ""}/>
      </button>
      {/* <button
        className={
          isMobile ? "mobile-scroll-link" : "contact-back"
        }
        onClick={onBack}
      >
        <span>Return to surface</span>
        <ArrowUp
          size={20}
          className={isMobile ? "mobile-scroll-arrow" : ""}
        />
      </button> */}
    </section>
  );
}

export default Contact;
