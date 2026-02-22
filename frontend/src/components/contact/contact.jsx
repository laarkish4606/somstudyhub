import React from "react";

const Contact = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12  bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900"
      
    >
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
      
        <div className="bg-gradient-to-br from-slate-950 via-indigo-900 to-purple-900 p-10 flex flex-col justify-center text-white">
          <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
          <p className="mb-6 text-lg opacity-90">
            Have questions, suggestions, or need assistance? Send us a message and our team will respond as soon as possible.
          </p>
          <div className="space-y-3 text-lg">
            <p>Email: <span className="underline font-medium">somstudyhub@gmail.com</span></p>
            <p>Phone: <span className="font-medium">+251901375553/+251902276248</span></p>
            <p>Address: <span className="font-medium">Ethiopia,Jigjiga</span></p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            Send Us a Message
          </h2>
          <form   
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
