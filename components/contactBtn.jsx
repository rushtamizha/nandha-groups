"use client";

import { Phone } from "lucide-react";

Phone
export default function ContactBtn() {
  return (
    <a
      href="tel:+917010557050"   // change to your real phone number
      className="fixed bottom-6 right-6 bg-linear-to-br from-green-600 to-green-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-700 transition-all z-50"
    >
     <Phone/>  Call Now
    </a>
  );
}
