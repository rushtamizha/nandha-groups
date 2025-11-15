
// "use client";
// import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { X } from "lucide-react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // ========================
// // Auto Image Slider Component
// // ========================
// const AutoSlider = ({ images }) => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (!images || images.length === 0) return;

//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(timer);
//   }, [images]);

//   return (
//     <div className="w-full h-64 overflow-hidden rounded-xl">
//       <img
//         src={images[index]}
//         alt="Product"
//         className="w-full h-full object-cover transition-all duration-500"
//       />
//     </div>
//   );
// };

// // ========================
// // Main Component
// // ========================
// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const path = usePathname();
//   const [prev, setPrev] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("/products.json");
//       const data = await res.json();

//       if (path === "/") {
//         setProducts(data.slice(0, 10));
//       } else {
//         setProducts(data || []);
//       }
//     } catch (error) {
//       console.error("Failed to load products:", error);
//     }
//   };

//   const prevModel = (data) => setPrev(data);
//   const closePrev = () => setPrev(null);

//   const handleQuote = (item) => {
//     const phone = "916383999565";
//     const message = `Hello! 👋\nI’d like to get a quote for:\n\n🧾 *${item.itemName}*\n\nPlease share pricing and availability.`;
//     const encoded = encodeURIComponent(message);
//     window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
//   };

//   return (
//     <div className="max-w-400 w-full mx-auto px-6 mt-20">
//       <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//         S&T Supplies Catalogue
//       </h1>

//       {/* PRODUCT GRID */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//         {products.map((item, i) => (
//           <div
//             key={i}
//             onClick={() => prevModel(item)}
//             className={`border-gray-200 bg-white rounded-2xl p-4 transition-all duration-200 ${
//               !item.stock ? "opacity-60 cursor-not-allowed" : "hover:shadow-md"
//             }`}
//           >
//             <div className="flex gap-3">
//               <div className="w-20 h-20 overflow-hidden rounded-xl">
//                 {/* CARD AUTO SLIDER */}
//                 <AutoSlider images={item.productImage} />
//               </div>

//               <div className="flex flex-col justify-between">
//                 <span className="text-sm font-semibold text-gray-800">
//                   {item.itemName}
//                 </span>
//               </div>
//             </div>

//             {!item.stock ? (
//               <button
//                 disabled
//                 className="mt-4 w-full py-2.5 rounded-full bg-gray-300 text-gray-600 text-sm font-medium cursor-not-allowed"
//               >
//                 Out of Stock
//               </button>
//             ) : (
//               <button
//                 onClick={() => handleQuote(item)}
//                 className="mt-4 w-full py-2.5 rounded-full bg-linear-to-b from-gray-800 to-gray-900 border border-gray-400 text-white text-sm font-medium hover:opacity-90"
//               >
//                 Get Quote
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {products.length === 0 && (
//         <div className="text-center text-gray-500 text-sm mt-8">
//           No products found.
//         </div>
//       )}

//       {/* =====================
//         PREVIEW MODAL WITH AUTO SLIDER
//       ====================== */}
//       {prev && (
//         <div className="w-screen bg-[#000000bf] h-screen top-0 left-0 fixed z-50 flex items-center justify-center p-4">
//           <div className="w-full max-w-lg bg-white p-4 rounded-xl relative">
//             <div className="flex justify-end">
//               <X onClick={closePrev} className="text-gray-800 cursor-pointer" />
//             </div>

//             <AutoSlider images={prev.productImage} />

//             <div className="text-xl font-medium mt-3">{prev.itemName}</div>
//             <div className="text-gray-600 text-sm">{prev.description}</div>

//             <button
//               className="bg-gray-700 w-full p-3 rounded-full text-white font-semibold mt-4"
//               onClick={() => handleQuote(prev)}
//             >
//               Get Quote
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;


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
    const phone = "916383999565";
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
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white p-4 rounded-xl relative">

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
                    className="w-full h-full object-cover rounded-xl"
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
