import { employees } from '@/app/data/employees';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Add this to ensure the page renders correctly on the server
export default async function EmployeeProfile({ params }) {
  // NEXT.JS 15 FIX: You must await params
  const { slug } = await params; 
  
  const employee = employees.find((e) => e.slug === slug);

  if (!employee) notFound();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Premium Header */}
        <div className="bg-[#003057] p-10 text-center relative">
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F9801D] opacity-10 rounded-full -mr-16 -mt-16"></div>
          
          {/* Employee Image Section */}
          <div className="relative w-28 h-28 mx-auto mb-4">
             <div className="absolute inset-0 rounded-full border-4 border-[#F9801D] scale-105"></div>
             <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-200 border-4 border-white">
                <Image 
                  src={employee.image || '/employee/placeholder.jpg'} 
                  alt={employee.name}
                  fill
                  className="object-cover"
                  priority
                />
             </div>
          </div>

          <h1 className="text-white text-2xl font-bold tracking-tight uppercase">{employee.name}</h1>
          <div className="inline-block mt-2 px-3 py-1 bg-[#F9801D] text-[#003057] text-[10px] font-black rounded uppercase tracking-widest">
            {employee.designation}
          </div>
        </div>

        {/* Info Grid */}
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            <InfoBlock label="Employee ID" value={employee.id} />
            <InfoBlock label="Blood Group" value={employee.bloodGroup} />
            <InfoBlock label="Project Site" value={employee.site} />
            <InfoBlock label="Emergency" value={employee.emergency} />
          </div>

          <div className="pt-6 border-t border-dashed border-slate-200">
            <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-tighter">
              <span>Issue: {employee.issueDate}</span>
              <span className="text-[#F9801D]">Expiry: {employee.expiryDate}</span>
            </div>
          </div>
          
          {/* Professional Status Badge */}
          <div className="flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 py-3 rounded-xl font-bold text-xs border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            VERIFIED AUTHORIZED PERSONNEL
          </div>
        </div>

        {/* Branding Footer */}
        <div className="bg-[#F8FAFC] p-4 text-center border-t border-slate-100">
          <p className="text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase">
            Nandha Groups S&T Division • Digital ID System
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ label, value }) {
  return (
    <div className="group">
      <p className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-wider">{label}</p>
      <p className="text-[#003057] font-bold text-sm leading-tight">{value}</p>
    </div>
  );
}