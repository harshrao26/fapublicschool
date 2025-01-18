import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from '../assets/logo.png'
const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [classForInquiry, setClassForInquiry] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const now = new Date();
    const offset = 330; // IST offset in minutes
    const istDate = new Date(now.getTime() + offset * 60 * 1000);
    const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

    const formData = {
      name,
      phone,
      email,
      classForInquiry,
      notes,
      timestamp,
    };

    try {
      await axios.post(
        "https://hook.eu2.make.com/4rr9umrrjusybw87flo2esz8x265bfh8",
        formData
      );
      navigate("/thankyou");
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="">
      <div className="container mx-auto flex flex-col md:flex-row items-center bg-white ">
        {/* Left Section: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={logo} // Replace with your actual image URL
            alt="Contact Us"
            className="rounded-l-lg w-full h-full object-cover"
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6 text-center">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-lg font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="classForInquiry"
                className="block text-lg font-medium text-gray-700"
              >
                Class for Inquiry
              </label>
              <input
                type="text"
                id="classForInquiry"
                value={classForInquiry}
                onChange={(e) => setClassForInquiry(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="notes"
                className="block text-lg font-medium text-gray-700"
              >
                Notes
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full p-3 text-white font-medium bg-yellow-400 rounded-md ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
