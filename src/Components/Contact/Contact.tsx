import React, { useState } from "react";
import { FormDataType } from "../../types/types";
import "./Contact.css";



const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="Contact">
      <h1 className="contact-h1">Contact me!</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <section className="contact-section contact-name">
          <label className="contact-label_name" htmlFor="name-input">
            Name:
          </label>
          <input
            id="name-input"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />
        </section>
        <section className="contact-section contact-email">
          <label className="contact-label_email" htmlFor="email-input">
            Email:
          </label>
          <input
            id="email-input"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </section>
        <section className="contact-section contact-message">
          <label className="contact-label_message" htmlFor="message-input">
            Message:
          </label>
          <textarea
            id="message-input"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </section>
        <button className="contact-btn" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
