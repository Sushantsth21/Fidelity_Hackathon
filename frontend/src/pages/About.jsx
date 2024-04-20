import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-gradient-to-br from-green-300 to-green-800 shadow-2xl rounded-lg hover:shadow-3xl transition-all duration-500 ease-in-out">
      <h1 className="text-5xl md:text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-500 mb-8 tracking-wide">
        About Us
      </h1>
      <p className="text-white text-lg mb-6 leading-relaxed">
        Welcome to <strong className="text-lime-300">Fidelity Finance</strong>, your trusted resource for understanding and managing your personal finances. Our mission is to provide accessible, accurate, and practical financial education to everyone.
      </p>
      <p className="text-white text-lg mb-6 leading-relaxed">
        We believe that financial literacy is a fundamental life skill that everyone deserves to have. Whether you're planning for retirement, setting up your budget, or looking to invest for the first time, we're here to guide you every step of the way.
      </p>
      <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
      <ul className="list-disc list-inside space-y-3 mb-8 pl-6 text-white">
        <li>
          <strong className="text-lime-400">Budgeting:</strong> Learn to manage your income and expenses effectively.
        </li>
        <li>
          <strong className="text-lime-400">Investing:</strong> Understand the basics of the stock market, mutual funds, and other investment options.
        </li>
        <li>
          <strong className="text-lime-400">Debt Management:</strong> Get advice on how to reduce debt and manage credit responsibly.
        </li>
        <li>
          <strong className="text-lime-400">Savings:</strong> Discover strategies for setting aside money for future needs and goals.
        </li>
      </ul>
      <h2 className="text-4xl font-bold text-white mb-4">Our Vision</h2>
      <p className="text-white text-lg mb-6 leading-relaxed">
        Our vision is to empower individuals to take control of their financial future by providing the knowledge and tools necessary for making informed financial decisions. We strive to simplify complex financial information and make it accessible to everyone, regardless of their background or financial status.
      </p>
      <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
      <p className="text-white text-lg mb-6 leading-relaxed">
        Have questions? Our team is ready to help you. Reach out to us at  
        <a href="mailto:team4@gmail.com" className="font-bold text-lime-400 hover:text-lime-500 underline transition duration-300 ease-in-out">
        &nbsp; team4@gmail.com&nbsp;
        </a>.
      </p>
    </div>
  );
}

export default About;
