import React from 'react'
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const properties = [
    {
      id: 1,
      name: 'Modern Apartment',
      location: 'New York',
      price: 500000,
      image: 'https://www.sbid.org/wp-content/uploads/2021/12/V.Concept-by-Victoria-Vitkovskaya-Almond-Apartment16.jpg',
    },
    {
      id: 2,
      name: 'Luxury Villa',
      location: 'Los Angeles',
      price: 1200000,
      image: 'https://www.tripsavvy.com/thmb/smWyEn47FoDNmfaMnuGcnz8MvqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_DSC0256_Fotor_Snapseed_Fotora-594a885d3df78c537b824959.jpg',
    },
    {
      id: 3,
      name: 'Cozy Cottage',
      location: 'San Francisco',
      price: 300000,
      image: 'https://ruemag.com/wp-content/uploads/2022/08/08-16-22_Home-Tour_Kelly-Martin-Interiors_6.jpg',
    },
    {
      id: 4,
      name: 'Penthouse Suite',
      location: 'Miami',
      price: 850000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyw538cSI4S9kWFwfsrEHIE24873S7La-Btw&s',
    },
    {
      id: 5,
      name: 'Beachside Bungalow',
      location: 'Malibu',
      price: 950000,
      image: 'https://a0.muscache.com/im/pictures/7890cc50-e4ff-48b2-af49-744460719dae.jpg?im_w=720',
    },
    {
      id: 6,
      name: 'Suburban Family Home',
      location: 'Austin',
      price: 450000,
      image: 'https://a0.muscache.com/im/pictures/d6ce61b5-87e5-4f45-b54d-42f2f7ef9a55.jpg?im_w=1440',
    },
    {
      id: 7,
      name: 'Downtown Loft',
      location: 'Chicago',
      price: 750000,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_9R94o1PpT-f7XkWORcns7F1sl6aIEycccg&s',
    },
    {
      id: 8,
      name: 'Mountain Cabin',
      location: 'Denver',
      price: 350000,
      image: 'https://t3.ftcdn.net/jpg/08/02/79/80/360_F_802798025_d2yXk4bTx3jBTvmI9yBGax2umuY4KJFn.jpg',
    },
    // Add more properties here
  ];

  const filteredProperties = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Find Your Dream Home</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or location..."
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Property Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{property.name}</h2>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-gray-900 font-bold">${property.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
