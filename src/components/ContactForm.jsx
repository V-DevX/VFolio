import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const checkRequired = () => {
    if (userInput.name && userInput.email && userInput.message) {
      setError((e) => ({ ...e, required: false }));
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();
    if (!userInput.name || !userInput.email || !userInput.message) {
      setError((e) => ({ ...e, required: true }));
      return;
    }
    if (!isValidEmail(userInput.email)) {
      setError((e) => ({ ...e, email: true }));
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(
        "service_85kig9f",
        "template_1aix6am",
        {
          from_name: userInput.name,
          from_email: userInput.email,
          message: userInput.message,
          to_email: "vasanthjany@gmail.com",
        },
        "L07UPVbbIWI1LimlG"
      );
      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase font-semibold">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please don't hesitate to
          contact me. I am open to work opportunities that align with my skills
          and interests.
        </p>
        <form onSubmit={handleSendMail} className="mt-6 flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name:</label>
            <input
              type="text"
              maxLength={100}
              required
              value={userInput.name}
              onChange={(e) =>
                setUserInput((ui) => ({ ...ui, name: e.target.value }))
              }
              onBlur={checkRequired}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email:</label>
            <input
              type="email"
              maxLength={100}
              required
              value={userInput.email}
              onChange={(e) =>
                setUserInput((ui) => ({ ...ui, email: e.target.value }))
              }
              onBlur={() => {
                checkRequired();
                setError((e) => ({
                  ...e,
                  email: !isValidEmail(userInput.email),
                }));
              }}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
            />
            {error.email && (
              <p className="text-sm text-red-400">Please provide a valid email!</p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message:</label>
            <textarea
              maxLength={500}
              required
              rows={4}
              value={userInput.message}
              onChange={(e) =>
                setUserInput((ui) => ({ ...ui, message: e.target.value }))
              }
              onBlur={checkRequired}
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] px-3 py-2"
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col items-center gap-3">
            {error.required && (
              <p className="text-sm text-red-400">All fields are required!</p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 py-2.5 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out disabled:opacity-50"
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  Send Message
                  <TbMailForward size={20} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
