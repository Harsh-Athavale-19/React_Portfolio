import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_email", "template_portfolio", form.current, "ZtG07zYdELDigI0Bw").then(
      (result) => {
        console.log(result.text);
        toast.success(`Successfully Sent Message`);
      },
      (error) => {
        console.log(error.text);
        toast.error(`Something Error Occurred `);
      }
    );

    e.target.reset();
  };
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="text-center mb-5 mt-3">CONTACT ME</h2>
          <div className="container contact_card_wrapper">
            <div className="card contact_card">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    required
                    name="user_name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    required
                    name="user_email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputSubject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSubject"
                    required
                    name="subject"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="textAreaMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="textAreaMessage"
                    rows="3"
                    required
                    name="message"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" value="Send">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
      </section>
    </>
  );
};

export default Contact;
