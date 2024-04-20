import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Fidelity Finance</h1>
        <p className="text-lg text-gray-600 mb-6">
          Empowering you with the tools and knowledge to manage your finances effectively.
        </p>
        <Link to="/about">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More About Us
          </button>
        </Link>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Budget Planning</h3>
            <p className="text-gray-600 text-sm">
              Create and manage your budget, track spending, and forecast your financial future.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Investment Advice</h3>
            <p className="text-gray-600 text-sm">
              Understand the basics of investing and get personalized advice tailored to your goals.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Debt Management</h3>
            <p className="text-gray-600 text-sm">
              Learn strategies to manage and reduce your debts in a sustainable way.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">Ready to Take Control of Your Finances?</h2>
        <Link to="/signup">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Sign Up Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
