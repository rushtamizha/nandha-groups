import React from 'react'
import { usePathname ,useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
const Drawer = ({drawer,setDrawer}) => {
    const router = useRouter()
    const pathname = usePathname(); 
    const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blogs", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Our Technicians", href: "/our-team" },
  ];
  return (
   drawer && <div  className='fixed w-screen  h-screen top-0 right-0 z-100'>
    <div onClick={()=> setDrawer(!drawer)} className='backdrop-blur-sm md:hidden w-full h-full'></div>
    <div className={` h-screen md:hidden  bg-white fixed top-0 right-0 z-100  ${drawer ? 'w-1/2' : 'w-0'}`}>
        <div className=" text-gray-700 gap-4  flex flex-col shadow-xl border border-gray-200 h-full py-3 px-6">
            <div className='py-2'><IoClose onClick={()=> setDrawer(!drawer)} className='text-2xl font-bold' /></div>
          {menuItems.map((item) => (
            <p
              key={item.name}
              onClick={()=>{ 
                router.push(item.href)
                setDrawer(!drawer)
              }}
              className={`cursor-pointer border-b-2 pb-1   ${
                pathname === item.href
                  ? " border-b-blue-700 text-blue-700 "
                  : "border-white"
              }`}
            >
              {item.name}
            </p>
          ))}


          <button onClick={()=>{ 
            router.push('/contact')
          setDrawer(!drawer) }
        } className='bg-amber-600 text-white rounded-full py-2'>Contact Us</button>
        </div>
    </div> 
    </div>
  )
}

export default Drawer