"use client";
import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({
    fullname: "",
    mobile: "",
    message: "",
  });

  const businessNumber = "917010557050"; 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    const { fullname, mobile, message } = form;

    if (!fullname || !mobile || !message) {
      alert("Please fill all the fields before sending.");
      return;
    }

    const text = `📩 *New Inquiry from Website*%0A
👤 *Name:* ${fullname}%0A
📞 *Mobile:* ${mobile}%0A
💬 *Message:* ${message}`;

    const whatsappURL = `https://wa.me/${businessNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
    <div className="max-w-4xl mx-auto px-6 py-10 font-[Bai Jamjuree] mt-10">
      <h1 className="text-3xl font-semibold text-gray-800 text-center mb-2">
        Contact Us
      </h1>
      <p className="text-gray-500 text-center mb-8">
        We’d love to hear from you — reach out for quotes, product inquiries, or
        partnership opportunities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Send us a message
          </h2>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full mt-1 p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="w-full mt-1 p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full mt-1 p-2.5 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-gray-800 focus:outline-none"
              />
            </div>

            <button
              onClick={handleSend}
              className="w-full mt-3 flex items-center justify-center gap-2 bg-linear-to-b from-green-600 to-green-700 text-white font-medium py-2.5 rounded-full hover:opacity-90 transition-all duration-150"
            >
              <MessageCircle className="w-5 h-5" /> Send via WhatsApp
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-5">
          <div className="flex items-start gap-3">
            <Phone className="w-6 h-6 text-gray-700" />
            <div>
              <h3 className="font-medium text-gray-700">Call Us</h3>
              <p className="text-gray-500 text-sm">+917010557050</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-6 h-6 text-gray-700" />
            <div>
              <h3 className="font-medium text-gray-700">Email</h3>
              <p className="text-gray-500 text-sm">groupsnandha@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-6 h-6 text-gray-700" />
            <div>
              <h3 className="font-medium text-gray-700">Office</h3>
              <p className="text-gray-500 text-sm">
                Flat No: 210, Alagar Nagar, Vadamadurai, Dindigul, Tamil Nadu - 624802
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
