import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contactMethod: "email",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  interface ContactFormData {
    name: string;
    email: string;
    message: string;
    contactMethod: string;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show success message
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
      contactMethod: "email",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 py-20 font-inter">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white mb-2">Get in Touch</h1>
          <p className="text-blue-100">
            We'd love to hear from you. Fill out the form below and we'll get
            back to you shortly.
          </p>
        </div>

        {/* Form */}
        <form className="px-8 py-8 space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 outline-none transition-all"
              placeholder="john.doe@example.com"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-1 outline-none transition-all"
              placeholder="Please provide details about your inquiry..."
            ></textarea>
            <p className="text-sm text-gray-500 mt-2">Minimum 10 characters</p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6 animate-fade-in">
          <div className="flex items-start gap-3">
            <svg
              className="w-6 h-6 text-green-600 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-1">
                Inquiry Submitted Successfully!
              </h3>
              <p className="text-green-700">
                Thank you for reaching out. We'll get back to you within 24-48
                hours.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
