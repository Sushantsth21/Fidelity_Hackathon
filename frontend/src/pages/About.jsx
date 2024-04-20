import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-gray-600 text-lg mb-4">
        Welcome to Fidelity Finance, your trusted resource for understanding and managing your personal finances. Our mission is to provide accessible, accurate, and practical financial education to everyone.
      </p>
      <p className="text-gray-600 text-lg mb-4">
        We believe that financial literacy is a fundamental life skill that everyone deserves to have. Whether you're planning for retirement, setting up your budget, or looking to invest for the first time, we're here to guide you every step of the way.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Services</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li className="text-gray-600 text-lg"><strong>Budgeting:</strong> Learn to manage your income and expenses effectively.</li>
        <li className="text-gray-600 text-lg"><strong>Investing:</strong> Understand the basics of the stock market, mutual funds, and other investment options.</li>
        <li className="text-gray-600 text-lg"><strong>Debt Management:</strong> Get advice on how to reduce debt and manage credit responsibly.</li>
        <li className="text-gray-600 text-lg"><strong>Savings:</strong> Discover strategies for setting aside money for future needs and goals.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Vision</h2>
      <p className="text-gray-600 text-lg mb-4">
        Our vision is to empower individuals to take control of their financial future by providing the knowledge and tools necessary for making informed financial decisions. We strive to simplify complex financial information and make it accessible to everyone, regardless of their background or financial status.
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Us</h2>
      <p className="text-gray-600 text-lg mb-4">
        Have questions? Our team is ready to help you. Reach out to us at <a href="mailto:info@fidelityfinance.com" className="text-blue-600 hover:text-blue-800">info@fidelityfinance.com</a>.
      </p>
    </div>
  );
}

export default About;
