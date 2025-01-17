import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Don't forget to import axios

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [classForInquiry, setClassForInquiry] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status

  const navigate = useNavigate(); // Hook to navigate to the /thankyou page

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable submit button when submitting

    // Create timestamp for submission
    const now = new Date();
    const offset = 330; // IST offset in minutes (5 hours 30 minutes)
    const istDate = new Date(now.getTime() + offset * 60 * 1000);
    const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

    // Prepare data to be sent
    const formData = {
      name,
      phone,
      email,
      classForInquiry,
      notes,
      timestamp,
    };

    try {
      // Send data to external API (e.g., Make.com webhook)
      await axios.post(
        "https://hook.eu2.make.com/1whoqqvg8a3mjh45syxiab5ar9faoymg", // Replace with your actual endpoint
        formData
      );

      // On success, redirect to the /thankyou page
      navigate("/thankyou");
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false); // Re-enable the submit button in case of error
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
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
            className={`w-full p-3 text-white font-medium bg-blue-600 rounded-md ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
