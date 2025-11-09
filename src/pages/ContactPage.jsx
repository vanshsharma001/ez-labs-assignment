import { useState } from "react";

import bgTexture from "../assets/BG.png";
import bgOverlay from "../assets/BG-1.png";
import TopRightMandala from "../assets/Footer Vector-1.png";
import BottomLeftFlower from "../assets/Footer Vector.png";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Enter a valid email address.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Network error. Try again later.");
    }

    setLoading(false);
  };

  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-10 py-20"
      style={{
        backgroundImage: `url(${bgTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: `url(${bgOverlay})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.9,
          mixBlendMode: "normal",
        }}
      ></div>

      <img
        src={TopRightMandala}
        alt="Mandala Top Right"
        className="absolute right-0 top-0 w-70 md:w-[400px] opacity-85 pointer-events-none select-none"
      />

      <img
        src={BottomLeftFlower}
        alt="Flower Bottom Left"
        className="absolute bottom-0 left-0 w-70 md:w-[400px] opacity-85 pointer-events-none select-none"
      />

      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="text-black font-instrument md:mt-50 mt-2 font-normal text-[14px] leading-relaxed max-w-[400px]">
          <p>Whether you have an idea, a question, or simply want to explore how V can work with you — we’re just a message away.</p>
          <p>Let’s catch up over coffee.</p>
          <p>Great stories always begin with a good conversation.</p>
        </div>

        <div className="md:p-10 relative w-full">
          <h2 className="text-center font-halant text-[24px] mb-1">Join the Story</h2>
          <p className="text-center font-instrument text-sm mb-8">Ready to bring your vision to life? Let’s talk.</p>

          {submitted && <p className="text-green-600 text-center mb-4">Form Submitted</p>}
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name*" className="w-full border rounded border-gray-300 px-3 py-2 text-sm outline-none bg-white/80" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Your email*" className="w-full border rounded border-gray-300 px-3 py-2 text-sm outline-none bg-white/80" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone*" className="w-full border rounded border-gray-300 px-3 py-2 text-sm outline-none bg-white/80" />
            <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Your message*" className="w-full border rounded border-gray-300 px-3 py-2 text-sm outline-none bg-white/80"></textarea>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#F15D2B] text-white text-[18px] px-3 md:px-5 py-2.5 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:bg-[#ff6b3a] transition-all duration-300 font-instrument"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>

          <div className="text-center font-halant text-sm font-bold mt-6 text-[#F15D2B]">
            vernita@varnanfilms.co.in &nbsp; • &nbsp; +91 98736 84567
          </div>
        </div>
      </div>
    </section>
  );
}
