import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

// --- TS Type Definitions ---
interface SupplierItem {
  id: string;
  initials: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  status: "ACTIVE" | "INACTIVE" | "ON HOLD";
  avatarBgColor: string;
}

export default function SuppliersPage() {
  // Exact data mirrored directly from your design preview image
  const initialSuppliers: SupplierItem[] = [
    {
      id: "1",
      initials: "JD",
      name: "John Doe",
      company: "Fresh Farms Ltd.",
      phone: "+1 (555) 0123",
      email: "j.doe@freshfarms.co",
      status: "ACTIVE",
      avatarBgColor: "bg-[#E5F7E4] text-[#2B8618]",
    },
    {
      id: "2",
      initials: "SR",
      name: "Sarah Rivera",
      company: "Global Logistics",
      phone: "+1 (555) 0987",
      email: "rivera@globallog.com",
      status: "INACTIVE",
      avatarBgColor: "bg-[#EEF2DF] text-[#7C8465]",
    },
    {
      id: "3",
      initials: "MK",
      name: "Michael Kim",
      company: "Pacific Seafood",
      phone: "+1 (555) 4433",
      email: "m.kim@pacseafood.net",
      status: "ON HOLD",
      avatarBgColor: "bg-[#EAEEDC] text-[#4D5335]",
    },
    {
      id: "4",
      initials: "AL",
      name: "Anna Lee",
      company: "Organic Harvest",
      phone: "+1 (555) 2211",
      email: "anna@organic.org",
      status: "ACTIVE",
      avatarBgColor: "bg-[#E5F7E4] text-[#2B8618]",
    },
    {
      id: "5",
      initials: "BT",
      name: "Ben Thompson",
      company: "Beverage Co.",
      phone: "+1 (555) 8877",
      email: "b.thompson@bevco.com",
      status: "ACTIVE",
      avatarBgColor: "bg-[#E5F7E4] text-[#2B8618]",
    },
  ];

  const [suppliers] = useState<SupplierItem[]>(initialSuppliers);

  return (
    <div className="flex ml-20 min-h-screen w-full bg-[#F7F9EE] font-sans text-[#2D311B]">
      <Sidebar />
      {/* PRIMARY WORKSPACE MODULE PANEL */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP LEVEL NAVIGATION & UTILITIES SEARCH CONTEXT HEADER */}
        <header className="h-20 border-b border-[#E5E9D5] px-8 flex items-center justify-between bg-[#F7F9EE]/50 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-[#1E2516]">Suppliers</h1>
            <span className="text-xl text-[#BAC29E]">|</span>
            <span className="text-xl font-bold tracking-tight text-[#7C8465]">
              Admin Terminal
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-72">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#7C8465]">
                <SearchIcon className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search suppliers..."
                className="w-full text-xs font-semibold bg-[#EEF2DF] border border-[#E1E6CE] text-[#2D311B] rounded-xl pl-10 pr-4 py-2.5 placeholder-[#7C8465] outline-none focus:bg-white focus:border-[#4D6636] transition-all"
              />
            </div>

            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#F7F9EE] relative text-[#2D311B]">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-2.5 right-3.5 h-2 w-2 rounded-full bg-[#FF5C5C] border-2 border-[#F7F9EE]"></span>
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-[#F7F9EE] text-[#2D311B]">
              <SettingsIcon className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 pl-1">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                alt="Manager Profile"
                className="h-9 w-9 rounded-full object-cover border border-[#E1E6CE]"
              />
            </div>
          </div>
        </header>

        {/* WORKSPACE CONTENT SCROLL MODULE */}
        <main className="p-8 max-w-7xl w-full mx-auto space-y-6 flex-1 flex flex-col justify-between">
          <div className="space-y-6">
            {/* CORE TITLING AND PRIMARY ACTION CONTROL BLOCK */}
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-black text-[#1E2516] tracking-tight">
                  Manage Partnerships
                </h2>
                <p className="text-xs font-bold text-[#7C8465] mt-1">
                  Review and manage your global supply chain network.
                </p>
              </div>
              <button className="bg-[#C1F161] hover:bg-[#b0dc52] text-[#1E2516] transition-colors rounded-xl px-5 py-2.5 text-xs font-black flex items-center gap-2 shadow-sm">
                <PlusIcon className="w-4 h-4 stroke-3" />
                <span>Add Supplier</span>
              </button>
            </div>

            {/* PERFORMANCE METRICS SUMMARY CARD GRID */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* TOTAL SUPPLIERS */}
              <div className="bg-[#EEF2DF]/50 rounded-2xl border border-[#E5E9D5] p-5 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-[#7C8465] uppercase tracking-wider">
                    Total Suppliers
                  </p>
                  <h3 className="text-[26px] font-black text-[#1E2516] tracking-tight">
                    124
                  </h3>
                  <p className="text-[10px] font-bold text-[#40AA22] flex items-center gap-1">
                    <span>↗ +12%</span>{" "}
                    <span className="text-[#7C8465] font-semibold">
                      from last month
                    </span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#E1E6CE] text-[#4D5335] flex items-center justify-center">
                  <UsersIcon className="w-4 h-4" />
                </div>
              </div>

              {/* ACTIVE CONTRACTS */}
              <div className="bg-[#EEF2DF]/50 rounded-2xl border border-[#E5E9D5] p-5 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-[#7C8465] uppercase tracking-wider">
                    Active Contracts
                  </p>
                  <h3 className="text-[26px] font-black text-[#1E2516] tracking-tight">
                    98
                  </h3>
                  <p className="text-[10px] font-bold text-[#4D5335]">
                    4 expiring soon
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#E1E6CE] text-[#4D5335] flex items-center justify-center">
                  <ContractIcon className="w-4 h-4" />
                </div>
              </div>

              {/* PENDING ORDERS */}
              <div className="bg-[#EEF2DF]/50 rounded-2xl border border-[#E5E9D5] p-5 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-[#7C8465] uppercase tracking-wider">
                    Pending Orders
                  </p>
                  <h3 className="text-[26px] font-black text-[#1E2516] tracking-tight">
                    15
                  </h3>
                  <p className="text-[10px] font-bold text-[#FF5C5C] flex items-center gap-1">
                    <span>⚠️ 3 Urgent deliveries</span>
                  </p>
                </div>
                <div className="h-10 w-10 rounded-full bg-[#E1E6CE] text-[#40AA22] flex items-center justify-center">
                  <TruckIcon className="w-4 h-4 text-[#4D6636]" />
                </div>
              </div>
            </section>

            {/* PARTNERSHIPS OVERVIEW MASTER LOG DATA TABLE */}
            <div className="bg-white rounded-2xl border border-[#E5E9D5] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[#E5E9D5] text-[10px] font-black uppercase tracking-wider text-[#7C8465]">
                      <th className="px-6 py-4">Name</th>
                      <th className="px-6 py-4">Company</th>
                      <th className="px-6 py-4">Phone</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right pr-8">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F3E6] font-semibold text-[#2D311B]">
                    {suppliers.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-[#F9FBF3]/40 transition-colors"
                      >
                        {/* NAME WRAPPED AVATAR DESIGN ITEM */}
                        <td className="whitespace-nowrap px-6 py-4.5">
                          <div className="flex items-center gap-3">
                            <div
                              className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-black ${item.avatarBgColor}`}
                            >
                              {item.initials}
                            </div>
                            <span className="text-xs font-black text-[#1E2516]">
                              {item.name}
                            </span>
                          </div>
                        </td>

                        {/* COMPANY VALUE CELL */}
                        <td className="whitespace-nowrap px-6 py-4.5 text-xs text-[#7C8465] font-bold">
                          {item.company}
                        </td>

                        {/* PHONE NUMBER VALUE CELL */}
                        <td className="whitespace-nowrap px-6 py-4.5 text-xs text-[#7C8465] font-semibold">
                          {item.phone}
                        </td>

                        {/* EMAIL ADRESS */}
                        <td className="whitespace-nowrap px-6 py-4.5 text-xs text-[#4D5335] font-medium font-mono">
                          {item.email}
                        </td>

                        {/* OPERATIONAL STATUS PILL EMBEDDINGS */}
                        <td className="whitespace-nowrap px-6 py-4.5">
                          {item.status === "ACTIVE" && (
                            <span className="inline-flex items-center rounded-full bg-[#E5F7E4] px-2.5 py-0.5 text-[9px] font-black text-[#2B8618] uppercase tracking-wide">
                              Active
                            </span>
                          )}
                          {item.status === "INACTIVE" && (
                            <span className="inline-flex items-center rounded-full bg-[#EEF2DF] px-2.5 py-0.5 text-[9px] font-black text-[#7C8465] uppercase tracking-wide">
                              Inactive
                            </span>
                          )}
                          {item.status === "ON HOLD" && (
                            <span className="inline-flex items-center rounded-full bg-[#FFEAEA] px-2.5 py-0.5 text-[9px] font-black text-[#FF5C5C] uppercase tracking-wide">
                              On Hold
                            </span>
                          )}
                        </td>

                        {/* ACTION MATRIX TRIGGERS */}
                        <td className="whitespace-nowrap px-6 py-4.5 text-right pr-8 text-[#7C8465]">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-1 hover:bg-[#F2F6E6] hover:text-[#4D6636] rounded transition-colors">
                              <EditIcon className="w-4 h-4" />
                            </button>
                            <button className="p-1 hover:bg-[#FFEAEA] hover:text-[#FF5C5C] rounded transition-colors">
                              <DeleteIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* DATA LIST ITERACTIVE PAGINATION PANEL */}
              <div className="bg-[#EEF2DF]/30 border-t border-[#E5E9D5] px-6 py-4 flex items-center justify-between text-xs font-bold text-[#7C8465]">
                <div>
                  Showing <span className="text-[#1E2516]">1 to 5</span> of{" "}
                  <span className="text-[#1E2516]">124</span> suppliers
                </div>

                <div className="flex items-center gap-1.5">
                  <button className="p-1.5 rounded-lg text-[#BAC29E] cursor-not-allowed">
                    <ChevronLeftIcon className="w-3.5 h-3.5" />
                  </button>

                  <button className="h-6 w-6 rounded-full bg-[#C1F161] text-[#1E2516] flex items-center justify-center font-black text-xs shadow-sm">
                    1
                  </button>
                  <button className="h-6 w-6 rounded-full hover:bg-[#EAEEDC] text-[#4D5335] flex items-center justify-center transition-colors text-xs">
                    2
                  </button>
                  <button className="h-6 w-6 rounded-full hover:bg-[#EAEEDC] text-[#4D5335] flex items-center justify-center transition-colors text-xs">
                    3
                  </button>

                  <span className="px-0.5 text-[#BAC29E]">...</span>

                  <button className="h-6 w-6 rounded-full hover:bg-[#EAEEDC] text-[#4D5335] flex items-center justify-center transition-colors text-xs">
                    25
                  </button>

                  <button className="p-1.5 rounded-lg text-[#4D5335] hover:bg-[#EAEEDC]/50 transition-colors">
                    <ChevronRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SHARED VIEW PORTAL GLOBAL LEGAL FOOTER STYLING */}
          <footer className="pt-8 border-t border-[#E5E9D5] flex items-center justify-between text-xs font-bold text-[#7C8465]">
            <div className="flex items-center gap-4">
              <a
                href="#download"
                className="hover:text-[#1E2516] transition-colors"
              >
                Download CSV
              </a>
              <span className="text-[#BAC29E]">•</span>
              <a
                href="#portal"
                className="hover:text-[#1E2516] transition-colors"
              >
                Supplier Portal
              </a>
              <span className="text-[#BAC29E]">•</span>
              <a
                href="#help"
                className="hover:text-[#1E2516] transition-colors"
              >
                Help Center
              </a>
            </div>
            <div>
              © 2024 SuperPOS Supermarket System.{" "}
              <span className="font-mono text-[10px] font-medium text-[#BAC29E]">
                v2.4.0-stable
              </span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

// --- TYPE-SAFE EXPLICIT PROPS ASSIGNMENTS FOR INLINE SVG ASSETS ---
type SVGProps = React.SVGProps<SVGSVGElement>;

const SearchIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z"
    />
  </svg>
);
const BellIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
    />
  </svg>
);
const SettingsIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.767c-.31.236-.456.63-.385 1.01.016.082.025.167.025.252 0 .085-.009.17-.025.252-.07.38-.05 1.15.385 1.386l1.002.767a1.125 1.125 0 0 1 .26 1.43l-1.297 2.247a1.125 1.125 0 0 1-1.37.491l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.767c.31-.236.456-.63.385-1.01a3.45 3.45 0 0 1-.026-.252c0-.085.009-.17.026-.252.07-.38.05-1.15-.385-1.386l-1.004-.767a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    />
  </svg>
);
const PlusIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);
const UsersIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
    />
  </svg>
);
const ContractIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
  </svg>
);
const TruckIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 18.75a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.321-5.128a2.25 2.25 0 0 0-2.236-2.112h-4.5a1.125 1.125 0 0 0-1.125 1.125v9.75"
    />
  </svg>
);
const EditIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
    />
  </svg>
);
const DeleteIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.74 9-.346 9m-4.788 0L9 9m6 12a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7A1 1 0 0 1 7 6h10a1 1 0 0 1 1 1v14ZM10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425ZM19.5 6.75H4.5"
    />
  </svg>
);
const ChevronLeftIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    />
  </svg>
);
const ChevronRightIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
);
