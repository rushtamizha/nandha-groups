import Link from "next/link";
import { employees } from "@/app/data/employees";
import Image from "next/image";
export default function EmployeeDirectory() {
  return (
    <div className="min-h-screen bg-slate-50 py-22 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-[#003057] tracking-tight">
              S&T Personnel Directory
            </h1>
            <p className="mt-2 text-slate-500 font-medium">
              Authorized Signaling & Telecommunication Experts — Nandha Groups
            </p>
          </div>
          <div className="text-sm font-bold text-[#F9801D] bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
            {employees.length} Active Personnel
          </div>
        </div>

        {/* Employee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employees.map((emp) => (
            <Link
              href={`/employee/${emp.slug}`}
              key={emp.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-[#F9801D] transition-colors">
                    <Image
                      src={emp.image || "/employee/placeholder.jpg"} // Fallback if image is missing
                      alt={emp.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#003057] group-hover:text-[#F9801D] transition-colors">
                      {emp.name}
                    </h2>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {emp.designation}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 text-sm border-t border-slate-50 pt-4">
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">
                      ID Number
                    </p>
                    <p className="font-semibold text-slate-700">{emp.id}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase">
                      Site Location
                    </p>
                    <p className="font-semibold text-slate-700">{emp.site}</p>
                  </div>
                </div>
              </div>

              {/* View Profile Button (Footer of card) */}
              <div className="bg-slate-50 px-6 py-3 flex justify-between items-center group-hover:bg-[#003057] transition-colors">
                <span className="text-xs font-bold text-slate-500 group-hover:text-white">
                  View Digital ID
                </span>
                <svg
                  className="w-4 h-4 text-[#F9801D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-400 font-medium">
            Internal Secure Directory &copy; 2026 Nandha Groups | Powered by
            Wepzite
          </p>
        </div>
      </div>
    </div>
  );
}
