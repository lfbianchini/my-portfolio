import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_uy6tvmg",
        "template_7nd3ebw",
        templateParams,
        "R6lNa6zuy_sfZGc8p"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitted(true);
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Failed to send the message. Please try again.");
        }
      );
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        >
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=University+of+San+Francisco,+Fulton+Street,+San+Francisco,+CA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <div className="flex flex-col">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-2">
                  LINKEDIN
                </h2>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://www.linkedin.com/in/luca-bianchini-650923288" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-400 leading-relaxed break-all hover:text-indigo-200 transition-colors duration-300"
                >
                  linkedin.com/in/luca-bianchini-650923288
                </motion.a>
              </div>

              <div className="flex flex-col mt-4">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-2">
                  GITHUB
                </h2>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="https://github.com/lfbianchini" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-indigo-400 leading-relaxed break-all hover:text-indigo-200 transition-colors duration-300"
                >
                  github.com/lfbianchini
                </motion.a>
              </div>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <div className="flex flex-col">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-2">
                  EMAIL
                </h2>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:lfbianchini@dons.usfca.edu" 
                  className="text-indigo-400 leading-relaxed hover:text-indigo-200 transition-colors duration-300"
                >
                  lfbianchini@dons.usfca.edu
                </motion.a>
              </div>

              <div className="flex flex-col mt-4">
                <h2 className="title-font font-semibold text-white tracking-widest text-xs mb-2">
                  PHONE
                </h2>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="tel:+16506608100" 
                  className="text-indigo-400 leading-relaxed hover:text-indigo-200 transition-colors duration-300"
                >
                  650-660-8100
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Thank You!
            </h2>
            <p className="leading-relaxed mb-5 text-gray-400">
              Your message has been sent successfully. I'll be in touch with you soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
          >
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Contact Me
            </h2>
            <p className="leading-relaxed mb-5 text-gray-400">
              I'm always excited to collaborate on innovative projects. Whether you
              need a skilled developer for your next big idea or a problem-solver to
              enhance your existing solutions, I'm here to help bring your vision to
              life.
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-colors duration-300"
            >
              Submit
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
