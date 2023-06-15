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
        toast.success(`Successfully Sent Message`);
        console.log(result.text);
      },
      (error) => {
        toast.error(`Something Error Occurred `);
        console.log(error.text);
      }
    );

    e.target.reset();
  };
  return (
    <>
      <section className="contact" id="contact">
        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />

        <div className="container">
          <h2 className="text-center mb-5 mt-3">CONTACT ME</h2>
          <div className="container contact_card_wrapper">
            <div className="card contact_card">
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <input
                    placeholder="Name"
                    type="text"
                    className="form-control"
                    id="inputName"
                    required
                    name="user_name"
                  />
                </div>

                <div className="mb-3">
                  <input
                    placeholder="Email"
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    required
                    name="user_email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    placeholder="Subject"
                    type="text"
                    className="form-control"
                    id="inputSubject"
                    required
                    name="subject"
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    placeholder="Message"
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
      </section>
    </>
  );
};

export default Contact;
