import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">Welcome to Fidelity Finance</h1>
        <p className="text-xl text-gray-700 mb-8">
          Empowering you with the tools and knowledge to manage your finances effectively.
        </p>
        <Link to="/about">
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Learn More About Us
          </button>
        </Link>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Budget Planning</h3>
            <p className="text-gray-600 text-base">
              Create and manage your budget, track spending, and forecast your financial future.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Investment Advice</h3>
            <p className="text-gray-600 text-base">
              Understand the basics of investing and get personalized advice tailored to your goals.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-xl p-8 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Debt Management</h3>
            <p className="text-gray-600 text-base">
              Learn strategies to manage and reduce your debts in a sustainable way.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Take Control of Your Finances?</h2>
        <Link to="/signup">
          <button className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Sign Up Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
