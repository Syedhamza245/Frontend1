import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-10 md:space-y-0">

        {/* Logo / MyApp heading */}
        <div className="text-2xl font-bold">MyApp</div>

        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full md:w-auto">
          {/* Features */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Feature One</a></li>
              <li><a href="#" className="hover:text-white">Feature Two</a></li>
              <li><a href="#" className="hover:text-white">Feature Three</a></li>
              <li><a href="#" className="hover:text-white">Feature Four</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Trust & Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-xl text-gray-300">
              <a href="#" className="hover:text-white"><FaFacebookF /></a>
              <a href="#" className="hover:text-white"><FaTwitter /></a>
              <a href="#" className="hover:text-white"><FaInstagram /></a>
              <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
