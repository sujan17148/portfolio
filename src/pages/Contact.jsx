import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
export default function Contact() {
  return (
    <div
      id="contact-section"
      className="h-fit  px-5 py-20 md:px-10 md:w-2/3 mx-auto"
    >
      <h1 className="font-bold text-3xl text-center mb-10">Contact</h1>
      <div className="md:flex flex-row-reverse  items-start justify-between">
        <Form />
        <div className="contact mt-10">
          <h1 className="font-bold text-xl text-gray-700">Get In Touch</h1>
          <div className="flex items-center gap-2 my-3">
            <CiMail className="text-xl h-10 w-10 px-2 bg-light-accent text-white rounded-full" />
            <p className="leading-4 text-black">
              Email{" "}
              <span className="block text-gray-700">
                sujansah.dev@gmail.com
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <IoLocationOutline className="text-xl h-10 w-10 px-2 bg-light-accent text-white rounded-full" />
            <p className="leading-4 text-black">
              Location{" "}
              <span className="block text-gray-700">Biratnager, Nepal</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const serviceId = String(import.meta.env.VITE_SERVICE_ID);
  const templateId = String(import.meta.env.VITE_TEMPLATE_ID);
  const publicKey = String(import.meta.env.VITE_PUBLIC_KEY);
  const form = useRef();
  function validateForm() {
    if (name.trim() === "") {
      toast.info("please Enter your Name");
      return false;
    }
    if (
        email.trim() == "" ||
        !email.endsWith("@gmail.com") ||
        email.trim().length < 11
      ) {
        toast.info("Invalid email address");
        return false;
      }
    if (message.trim() == "") {
      toast.info("Please Enter some message");
      return false;
    }
    return true;
  }
  function sendEmail(e) {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(() => {
        toast.success("Message sent successfully");
          setName("")
          setEmail("")
          setMessage("")
      })
      .catch(() => toast.error("Error sending message"))
      .finally(() => setIsLoading(false));
  }
  return (
    <form
      className="contact-form w-full max-w-xl"
      ref={form}
      onSubmit={sendEmail}
    >
      <label htmlFor="username" className="text-lg font-medium mb-2 block">
        Name
      </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        id="username"
        placeholder="Your Name"
        className="outline-none w-full bg-white border focus:border-light-accent  border-light-secondary rounded p-2 text-base"
      />
      <label htmlFor="email" className="text-lg font-medium block mt-5 mb-2">
        Email
      </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        placeholder="your@gmail.com"
        className="outline-none w-full bg-white border focus:border-light-accent  border-light-secondary rounded p-2 text-base"
      />
      <label htmlFor="message" className="text-lg font-medium mb-2 block ">
        Message
      </label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={6}
        name="message"
        id="message"
        placeholder="Your Message"
        className="outline-none w-full bg-white border focus:border-light-accent  border-light-secondary rounded p-2 text-base"
      />
      <button
        value="send"
        type="submit"
        className="bg-black text-white text-base font-medium px-3 py-2 rounded block mt-5 w-full active:scale-95 hover:scale-105 transition duration-300 ease-linear "
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
