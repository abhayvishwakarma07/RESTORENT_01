const Contact = () => {
    return (
      <div className="flex items-center justify-center p-6 py-24 bg-gray-100">
        <div className="flex flex-col w-full p-10 bg-white rounded-lg shadow-lg md:flex-row">
          
          {/* Left Side - Contact Form */}
          <div className="w-full p-4 md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-gray-800">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">Name</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">Email</label>
                <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block font-medium text-gray-700">Message</label>
                <textarea className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" rows="4" placeholder="Write your message"></textarea>
              </div>
              <button type="submit" className="w-full p-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
  
          {/* Right Side - Contact Info */}
          <div className="flex flex-col justify-center w-full p-4 md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800">Get in Touch</h3>
            <p className="mt-2 text-gray-600">Feel free to reach out for any queries or reservations.</p>
  
            <div className="mt-4">
              <p className="font-medium text-gray-700">📍 Address:</p>
              <p className="text-gray-600">123 Main Street, Indore, MP</p>
            </div>
  
            <div className="mt-4">
              <p className="font-medium text-gray-700">📞 Phone:</p>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
  
            <div className="mt-4">
              <p className="font-medium text-gray-700">✉️ Email:</p>
              <p className="text-gray-600">info@restaurant.com</p>
            </div>
  
            <div className="mt-6">
              <iframe 
                className="w-full h-40 rounded-lg" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.585325328041!2d75.85772531548645!3d22.719568985100792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad4d6d1e85%3A0xd3b8f0d55b6c5d4f!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1616481557055!5m2!1sen!2sin" 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Contact;
  