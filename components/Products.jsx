
"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Products = () => {
  const [products, setProducts] = useState([]);
  const path = usePathname();
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/products.json");
      const data = await res.json();
      if (path === "/") {
        setProducts(data.slice(0, 10));
      } else {
        setProducts(data || []);
      }
    } catch (error) {
      console.error("Failed to load products:", error);
    }
  };

  const handleQuote = (item) => {
    const phone = "917010557050";
    const message = `Hello! 👋\nI’d like to get a quote for:\n\n🧾 *${item.itemName}*\n\nPlease share pricing and availability.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="max-w-400 w-full mx-auto px-6 mt-20">
      
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        S&T Supplies Catalogue
      </h1>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((item, i) => (
          <div
            key={i}
            onClick={() => setPrev(item)}
            className={`border-gray-200 bg-white rounded-2xl p-4 transition-all duration-200 ${
              !item.stock ? "opacity-60 cursor-not-allowed" : "hover:shadow-md"
            }`}
          >
            {/* Swiper Slider */}
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              className="w-full h-30  rounded-xl mb-3"
            >
              {item.productImage?.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    className="w-full h-full object-cover rounded-xl"
                    alt="product"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-sm font-semibold text-gray-800">
              {item.itemName}
            </div>

            {item.stock ? (
              <button
                onClick={() => handleQuote(item)}
                className="mt-4 w-full py-2.5 rounded-full bg-gradient-to-b from-gray-800 to-gray-900 text-white text-sm font-medium hover:opacity-90"
              >
                Get Quote
              </button>
            ) : (
              <button
                disabled
                className="mt-4 w-full py-2.5 rounded-full bg-gray-300 text-gray-600 text-sm font-medium cursor-not-allowed"
              >
                Out of Stock
              </button>
            )}
          </div>
        ))}
      </div>

      {/* MODAL PREVIEW */}
      {prev && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center  p-4">
          <div className="w-full max-w-lg bg-white p-4 rounded-xl relative ">

            <div className="flex justify-end">
              <X onClick={() => setPrev(null)} className="cursor-pointer" />
            </div>

            {/* Swiper Inside Modal */}
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              className="w-full  rounded-xl"
            >
              {prev.productImage?.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    className="w-full md:h-140 object-cover rounded-xl"
                    alt="product"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="text-xl font-medium mt-3">{prev.itemName}</div>
            <p className="text-gray-600 text-sm">{prev.description}</p>

            <button
              className="bg-gray-700 w-full p-3 rounded-full text-white font-semibold mt-4"
              onClick={() => handleQuote(prev)}
            >
              Get Quote
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Products;

