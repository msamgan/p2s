import React from "react";
import paymentMethod from "../../../../public/frontend/assets/images/payments.png";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white px-6 md:px-20 py-10">
      <div className="max-w-screen-xl w-full mx-auto flex flex-col md:flex-row justify-between">


        {/* payments */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
          <img
            src={paymentMethod}
            alt="Payment Methods"
            className="h-10 object-contain"
          />
        </div>

        {/* Link */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* Parcel2Ship */}
          <div>
            <h4 className="text-green-500 font-bold mb-2">Parcel2Ship</h4>
            <ul className="space-y-1">
              <li>Services</li>
              <li>Package Consolidation</li>
              <li>Item Consolidation</li>
              <li>Buy it for me</li>
              <li>Refer a Friend</li>
              <li>E-commerce Solutions</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-green-500 font-bold mb-2">Help</h4>
            <ul className="space-y-1">
              <li>Frequently Asked Questions</li>
              <li>Prohibited Materials</li>
              <li>Shopping Directory</li>
            </ul>
          </div>

          {/* Warehouses */}
          <div>
            <h4 className="text-green-500 font-bold mb-2">Warehouses</h4>
            <ul className="space-y-1">
              <li>United States</li>
              <li>Turkey</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-green-500 font-bold mb-2">About</h4>
            <ul className="space-y-1">
              <li>Plans & Pricing</li>
              <li>How It Works</li>
              <li>Why Choose Us</li>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
