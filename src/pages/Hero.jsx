import React, { useState } from 'react';  // Import useState from React
import { ArrowRight } from 'lucide-react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Header from '../components/Header';
import Footer from '../components/Footer';

import heroImage from '../assests/hero-image.jpg';
import starImage from '../assests/hero-image.jpg'; // Replace with your image path




       
const Hero = () => {

        const [openIndex, setOpenIndex] = useState(null); // Initialize openIndex state
      
        const toggleFAQ = (index) => {
          setOpenIndex(openIndex === index ? null : index); // Toggle FAQ visibility
        }
  return (
        <>
             <Header/>

    <section className="bg-gradient-to-r from-[#e6f0fa] to-[#ffffff] py-16 px-4 font-poppins">
  <div className="max-w-7xl mx-auto text-center">
    
    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
      Manage Your Links <span className="text-blue-600">Effortlessly</span><br />
      <span className="text-blue-600">with Smart </span>Tracking Tools
    </h1>

    {/* Paragraph */}
    <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
      Shorten, brand, and monitor your links all in one place. Gain deep insights into click behavior and optimize your campaigns with real-time analytics.
    </p>

    {/* Button */}
    <button className="mt-8 bg-ramp-purple-600 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto hover:opacity-90">
      Get Started Now <ArrowRight className="ml-2" />
    </button>

    {/* Image */}
    <div className="mt-12 flex justify-center">
      <img 
        src={heroImage}
        alt="Link Management Dashboard"
        className="w-full max-w-md rounded-[2rem] shadow-lg"
      />
    </div>
  </div>
</section>



<section className="bg-white pt-40 pb-32 px-4 font-poppins">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Image in Star Shape */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="w-80 h-80 clip-star overflow-hidden shadow-lg">
        <img 
          src={starImage} 
          alt="Star" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>

    {/* Right Text */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-bold text-black">
        Unlock Powerful Link Insights
      </h2>
      <p className="mt-6 text-gray-700">
        Track link performance, click rates, and audience geography in real-time.<br />
        Understand what's working and make smarter marketing decisions based on data.
      </p>
      <button className="mt-6 bg-ramp-purple-600 text-white px-6 py-3 rounded-md flex items-center mx-auto md:mx-0 hover:opacity-90">
        Get started for free <ArrowRight className="ml-2" />
      </button>
    </div>
  </div>
</section>





<section className="bg-gradient-to-r from-[#e6f0fa] to-[#ffffff] py-32 px-4 font-poppins">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
    
    {/* Left Text Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug">
         Boost Your <span className="text-blue-600"> Brand with Smarter</span>  Link Management
      </h2>
      <br/>

      <p className="mt-6 text-gray-700">
        Create, customize, and track short links that elevate your digital presence.<br />
        Whether you're a marketer or a business owner, our tools help you monitor performance, optimize campaigns, and drive better engagement.
      </p>
      <br/>
      <button className="mt-8 bg-ramp-purple-600 text-white px-6 py-3 rounded-md flex items-center justify-center md:justify-start mx-auto md:mx-0 hover:opacity-90">
        Let's Get Started <ArrowRight className="ml-2" />
      </button>
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img 
        src={heroImage} 
        alt="Right Side Hero" 
        className="w-full max-w-lg rounded-[2rem] shadow-lg"
      />
    </div>
    
  </div>
</section>



<section className="bg-white pt-28 pb-20 px-4 font-poppins">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Image in Star Shape */}
    <div className="w-full md:w-1/2 flex justify-center">
      <div className="w-80 h-80 clip-star overflow-hidden shadow-lg">
        <img 
          src={starImage} 
          alt="Star" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>

    {/* Right Text */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-bold text-black">
        Take the First Step Toward Smarter Links
      </h2>
      <p className="mt-4 text-gray-700">
        Analyze every click, understand your audience, and improve your strategy with our powerful analytics dashboard.<br />
        Start tracking your links today — no technical setup required.
      </p>
      <button className="mt-6 bg-ramp-purple-600 text-white px-6 py-3 rounded-md flex items-center mx-auto md:mx-0 hover:opacity-90">
        Get started for free <ArrowRight className="ml-2" />
      </button>
    </div>
    
  </div>
</section>








<section className="bg-gradient-to-r from-[#e6f0fa] to-[#ffffff] py-32 px-4 font-poppins">
  <div className="max-w-7xl mx-auto text-center">
    
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-black leading-snug">
      What Our Clients Say
    </h2>

    {/* Client Review Slider */}
    <div className="mt-12 flex flex-col md:flex-row items-center gap-16">

      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src={starImage} 
          alt="Client" 
          className="w-48 h-48 object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Right Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-lg text-gray-700 italic">
Our platform empowers businesses to take full control of their links
from shortening and customizing to tracking real-time performance.
Whether you're a startup or an enterprise, our tools scale with your growth.
See how our clients are transforming their link strategies with ease.        </p>
        <p className="mt-4 text-orange-600 font-semibold">John Doe</p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center md:justify-start gap-4">
        <button className="px-6 py-3 bg-gray-300 text-black rounded-md hover:opacity-90">
  <FaArrowLeft />
</button>
<button className="px-6 py-3 bg-gray-300 text-black rounded-md hover:opacity-90">
  <FaArrowRight />
</button>

        </div>
      </div>
      
    </div>
  </div>
</section>











<section className="bg-white py-32 px-4 font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-8">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-6">
          {/* FAQ 1 */}
          <div className="w-full max-w-3xl mx-auto bg-[#e6f0fa] p-6 rounded-md shadow-md">
            <button
              onClick={() => toggleFAQ(1)}
              className="flex justify-between w-full text-left text-lg font-semibold"
            >
              <span>What is your return policy?</span>
              <span>
                {openIndex === 1 ? <HiChevronUp /> : <HiChevronDown />}
              </span>
            </button>
            {openIndex === 1 && (
              <div className="mt-4 text-gray-700">
                We offer a 30-day return policy on most items. Please visit our Returns page for more details.
              </div>
            )}
          </div>

          {/* FAQ 2 */}
          <div className="w-full max-w-3xl mx-auto bg-[#e6f0fa] p-6 rounded-md shadow-md">
            <button
              onClick={() => toggleFAQ(2)}
              className="flex justify-between w-full text-left text-lg font-semibold"
            >
              <span>How do I track my order?</span>
              <span>
                {openIndex === 2 ? <HiChevronUp /> : <HiChevronDown />}
              </span>
            </button>
            {openIndex === 2 && (
              <div className="mt-4 text-gray-700">
                You can track your order by logging into your account and visiting the 'Orders' section.
              </div>
            )}
          </div>

          {/* FAQ 3 */}
          <div className="w-full max-w-3xl mx-auto bg-[#e6f0fa] p-6 rounded-md shadow-md">
            <button
              onClick={() => toggleFAQ(3)}
              className="flex justify-between w-full text-left text-lg font-semibold"
            >
              <span>Do you offer international shipping?</span>
              <span>
                {openIndex === 3 ? <HiChevronUp /> : <HiChevronDown />}
              </span>
            </button>
            {openIndex === 3 && (
              <div className="mt-4 text-gray-700">
                Yes, we offer international shipping to most countries. Shipping costs will vary depending on location.
              </div>
            )}
          </div>

          {/* FAQ 4 - Updated */}
          <div className="w-full max-w-3xl mx-auto bg-[#e6f0fa] p-6 rounded-md shadow-md">
            <button
              onClick={() => toggleFAQ(4)}
              className="flex justify-between w-full text-left text-lg font-semibold"
            >
              <span>How can I contact customer support?</span>
              <span>
                {openIndex === 4 ? <HiChevronUp /> : <HiChevronDown />}
              </span>
            </button>
            {openIndex === 4 && (
              <div className="mt-4 text-gray-700">
                You can reach our customer support team via live chat or email at support@example.com.
              </div>
            )}
          </div>

          {/* FAQ 5 - Updated */}
          <div className="w-full max-w-3xl mx-auto bg-[#e6f0fa] p-6 rounded-md shadow-md">
            <button
              onClick={() => toggleFAQ(5)}
              className="flex justify-between w-full text-left text-lg font-semibold"
            >
              <span>Can I change my delivery address after placing an order?</span>
              <span>
                {openIndex === 5 ? <HiChevronUp /> : <HiChevronDown />}
              </span>
            </button>
            {openIndex === 5 && (
              <div className="mt-4 text-gray-700">
                Address changes can be requested within 12 hours of placing the order by contacting support.
              </div>
            )}
          </div>
        </div>
      </div>


      <div
  className="mt-20 mx-4 md:mx-20 rounded-xl py-12 px-6 text-center"
  style={{ backgroundColor: "#e78a47" }}  
>
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
What are you waiting for? Let's simplify your link strategy!
    </h2>
    <p className="text-white text-lg max-w-2xl mx-auto mb-6">
      Start managing, customizing, and tracking your links in one powerful dashboard.
Join thousands of users growing their brand with smarter links no coding needed.
    </p>
    <button className="mt-8 bg-[#8b5cf6] text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto hover:opacity-90">
  SignUp Now <ArrowRight className="ml-2" />
</button>

  </div>

    </section>

     <Footer/>


   </>
  );
};

export default Hero;
