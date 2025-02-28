const Footer = () => {
    return (
      <footer className="py-5 inset-shadow-zinc-900 shadow-2xlbg-white-900 bg-yellow-500 ">
        <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:px-12 md:grid-cols-4">
  
          {/* About Us */}
          <div>
            <h2 className="text-2xl font-bold">🍽️ KRISHNA </h2>
            <p className="mt-3">Serving delicious food with love and passion. Visit us for an unforgettable dining experience.</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="transition hover:text-white">Home</a></li>
              <li><a href="#" className="transition hover:text-white">Menu</a></li>
              <li><a href="#" className ="transition hover:text-white">About Us</a></li>
              <li><a href="#" className ="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-3">📍 123 Main Street, Indore, MP</p>
            <p className="">📞 +91 98765 43210</p>
            <p className="">✉️ info@restaurant.com</p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex mt-3 space-x-4">
              <a href="#" className=" hover:text-blue-500"><i className="fab fa-facebook fa-lg"></i></a>
              <a href="#" className=" hover:text-blue-400"><i className="fab fa-twitter fa-lg"></i></a>
              <a href="#" className=" hover:text-pink-500"><i className="fab fa-instagram fa-lg"></i></a>
              <a href="#" className=" hover:text-red-600"><i className="fab fa-youtube fa-lg"></i></a>
            </div>
          </div>
  
        </div>
  
        {/* Copyright */}
        <div className="pt-4 mt-8 text-sm text-center text-gray-500 border-t border-gray-700">
          © 2025 Abhay vishwakrma. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  