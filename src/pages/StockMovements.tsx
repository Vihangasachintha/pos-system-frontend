import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

// --- TS Type Definitions ---
interface StockLogItem {
  id: string;
  date: string;
  time: string;
  productName: string;
  sku: string;
  imageUrl: string;
  type: "Inbound" | "Outbound" | "Adjustment";
  quantity: number;
  before: number;
  after: number;
}

export default function StockMovements() {
  const [currentFilter, setCurrentFilter] = useState<
    "All" | "Inbound" | "Outbound" | "Adjustments"
  >("All");

  // Exact dataset mirrored directly from your design preview image
  const stockLogs: StockLogItem[] = [
    {
      id: "1",
      date: "Oct 24, 2023",
      time: "14:32 PM",
      productName: "Organic Kale 250g",
      sku: "VEG-042-KL",
      imageUrl:
        "https://images.unsplash.com/photo-1628773822503-930a84001a1a?w=120&auto=format&fit=crop&q=60",
      type: "Inbound",
      quantity: 150,
      before: 12,
      after: 162,
    },
    {
      id: "2",
      date: "Oct 24, 2023",
      time: "11:15 AM",
      productName: "Whole Milk 2L",
      sku: "DRY-891-MK",
      imageUrl:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=120&auto=format&fit=crop&q=60",
      type: "Outbound",
      quantity: -42,
      before: 88,
      after: 46,
    },
    {
      id: "3",
      date: "Oct 23, 2023",
      time: "09:00 AM",
      productName: "Vine Tomatoes",
      sku: "VEG-110-TM",
      imageUrl:
        "https://images.unsplash.com/photo-1595855759920-86582396756a?w=120&auto=format&fit=crop&q=60",
      type: "Adjustment",
      quantity: -8,
      before: 32,
      after: 24,
    },
    {
      id: "4",
      date: "Oct 22, 2023",
      time: "16:45 PM",
      productName: "Sourdough Loaf",
      sku: "BAK-202-SD",
      imageUrl:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=120&auto=format&fit=crop&q=60",
      type: "Inbound",
      quantity: 20,
      before: 5,
      after: 25,
    },
  ];

  return (
    <div className="flex pl-20 min-h-screen w-full bg-[#F7F9EE] font-sans text-[#2D311B]">
      <Sidebar />

      {/* PRIMARY WORKSPACE MONITOR MODULE PANEL */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP LEVEL NAVIGATION & UTILITIES SEARCH CONTEXT HEADER */}
        <header className="h-20 border-b border-[#E5E9D5] px-8 flex items-center justify-between bg-[#F7F9EE]/50 backdrop-blur-sm sticky top-0 z-20">
          {/* <h1 className="text-xl font-black text-[#1E2516] tracking-tight">Stock Movements</h1> */}
          <h1 className="text-xl font-bold tracking-tight text-[#1E2516]">
            Stock Movements
          </h1>

          <div className="flex items-center gap-4">
            <div className="relative w-72">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#7C8465]">
                <SearchIcon className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search SKU or Product..."
                className="w-full text-xs font-semibold bg-[#EEF2DF] border border-[#E1E6CE] text-[#2D311B] rounded-xl pl-10 pr-4 py-2.5 placeholder-[#7C8465] outline-none focus:bg-white focus:border-[#4D6636] transition-all"
              />
            </div>

            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-[#E1E6CE] relative text-[#2D311B]">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-2.5 right-3 h-1.5 w-1.5 rounded-full bg-[#FF5C5C]"></span>
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-white border border-[#E1E6CE] text-[#2D311B]">
              <SettingsIcon className="w-5 h-5" />
            </button>

            <div className="h-8 w-px bg-[#E1E6CE] mx-1"></div>

            <div className="flex items-center gap-2.5 pl-1">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                alt="Jane Cooper Profile"
                className="h-9 w-9 rounded-full object-cover border border-[#E1E6CE]"
              />
              <div className="leading-tight">
                <p className="text-xs font-black text-[#1E2516]">Jane Cooper</p>
                <p className="text-[9px] font-bold text-[#7C8465] uppercase tracking-wider">
                  Manager
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* WORKSPACE CONTENT SCROLL MODULE */}
        <main className="p-8 max-w-7xl w-full mx-auto space-y-6 flex-1">
          {/* STATISTICAL PERFORMANCE METRICS SUMMARY CARDS BLOCK */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* TOTAL STOCK VALUE */}
            <div className="bg-white rounded-2xl border border-[#E5E9D5] p-5 shadow-sm flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-[#7C8465] uppercase tracking-wider">
                  Total Stock Value
                </p>
                <h3 className="text-[26px] font-black text-[#1E2516] tracking-tight">
                  $248,390.00
                </h3>
                <p className="text-[10px] font-bold text-[#40AA22] flex items-center gap-1">
                  <span>↗ +4.2%</span>{" "}
                  <span className="text-[#7C8465] font-semibold">
                    from last month
                  </span>
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-[#EEF2DF] text-[#4D5335] flex items-center justify-center">
                <WalletIcon className="w-5 h-5" />
              </div>
            </div>

            {/* RESTOCKS THIS MONTH */}
            <div className="bg-white rounded-2xl border border-[#E5E9D5] p-5 shadow-sm flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-[#7C8465] uppercase tracking-wider">
                  Restocks This Month
                </p>
                <h3 className="text-[26px] font-black text-[#1E2516] tracking-tight">
                  1,204
                </h3>
                <p className="text-[10px] font-bold text-[#4D5335] flex items-center gap-1.5">
                  <DeliveryIcon className="w-3.5 h-3.5" />{" "}
                  <span>24 Pending deliveries</span>
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-[#E1E6CE] text-[#4D5335] flex items-center justify-center">
                <ClipboardCheckIcon className="w-5 h-5" />
              </div>
            </div>

            {/* WASTE / RETURNS ERROR BLOCK */}
            <div className="bg-white rounded-2xl border border-[#E5E9D5] p-5 shadow-sm flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-[#7C8465] uppercase tracking-wider">
                  Waste/Returns
                </p>
                <h3 className="text-[26px] font-black text-[#FF5C5C] tracking-tight">
                  -$2,140.45
                </h3>
                <p className="text-[10px] font-bold text-[#FF5C5C] flex items-center gap-1">
                  <span>⚠️ +12%</span>{" "}
                  <span className="text-[#FF7A7A] font-semibold">
                    vs expected
                  </span>
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-[#FFEAEA] text-[#FF5C5C] flex items-center justify-center">
                <RecycleIcon className="w-5 h-5" />
              </div>
            </div>
          </section>

          {/* INTERACTIVE TABLE TOOLBAR AND FILTERS CONTROLS */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex items-center bg-[#EAEEDC]/40 border border-[#E1E6CE] p-1 rounded-xl">
              <FilterTab
                label="All Movements"
                active={currentFilter === "All"}
                onClick={() => setCurrentFilter("All")}
              />
              <FilterTab
                label="Inbound"
                active={currentFilter === "Inbound"}
                onClick={() => setCurrentFilter("Inbound")}
              />
              <FilterTab
                label="Outbound"
                active={currentFilter === "Outbound"}
                onClick={() => setCurrentFilter("Outbound")}
              />
              <FilterTab
                label="Adjustments"
                active={currentFilter === "Adjustments"}
                onClick={() => setCurrentFilter("Adjustments")}
              />
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-white border border-[#E1E6CE] rounded-xl px-4 py-2.5 flex items-center gap-2 text-xs font-bold text-[#4D5335] shadow-sm">
                <CalendarIcon className="w-4 h-4 text-[#7C8465]" />
                <span>Oct 1 - Oct 31, 2023</span>
                <ChevronDownIcon className="w-3.5 h-3.5 text-[#7C8465] ml-1" />
              </div>

              <button className="bg-[#4D6636] hover:bg-[#3E522B] transition-colors text-white rounded-xl px-5 py-2.5 text-xs font-black flex items-center gap-2 shadow-sm">
                <SlidersIcon className="w-3.5 h-3.5" />
                <span>Adjust Stock</span>
              </button>
            </div>
          </div>

          {/* STOCK LOGS COMPREHENSIVE DATA TABLE VIEW */}
          <div className="bg-white rounded-2xl border border-[#E5E9D5] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#F9FBF3] border-b border-[#E5E9D5] text-[10px] font-black uppercase tracking-wider text-[#7C8465]">
                    <th className="px-6 py-4.5">Date &amp; Time</th>
                    <th className="px-6 py-4.5">Product Details</th>
                    <th className="px-6 py-4.5">Type</th>
                    <th className="px-6 py-4.5 text-center">Quantity</th>
                    <th className="px-6 py-4.5 text-center">Before</th>
                    <th className="px-6 py-4.5 text-center">After</th>
                    <th className="px-6 py-4.5 text-right pr-8">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F3E6] font-semibold text-[#2D311B]">
                  {stockLogs.map((log) => (
                    <tr
                      key={log.id}
                      className="hover:bg-[#F9FBF3]/30 transition-colors"
                    >
                      {/* DATE LOG TIMESTAMP MODULE */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <p className="text-xs font-black text-[#1E2516]">
                          {log.date}
                        </p>
                        <p className="text-[10px] font-bold text-[#7C8465] mt-0.5">
                          {log.time}
                        </p>
                      </td>

                      {/* INSET AVATAR METADATA CELL */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={log.imageUrl}
                            alt={log.productName}
                            className="h-10 w-10 rounded-xl object-cover border border-[#E5E9D5] bg-[#F9FBF3]"
                          />
                          <div>
                            <p className="text-xs font-black text-[#1E2516]">
                              {log.productName}
                            </p>
                            <p className="text-[10px] font-bold text-[#7C8465] uppercase tracking-wider mt-0.5">
                              SKU:{" "}
                              <span className="font-mono text-[#4D5335]">
                                {log.sku}
                              </span>
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* OPERATIONAL DYNAMIC EVENT BADGING MATRIX */}
                      <td className="whitespace-nowrap px-6 py-4">
                        {log.type === "Inbound" && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#E5F7E4] px-2.5 py-0.5 text-[9px] font-black text-[#2B8618] uppercase tracking-wide">
                            <span className="text-[8px]">↙</span> Inbound
                          </span>
                        )}
                        {log.type === "Outbound" && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#EEF2DF] px-2.5 py-0.5 text-[9px] font-black text-[#7C8465] uppercase tracking-wide">
                            <span className="text-[8px]">↗</span> Outbound
                          </span>
                        )}
                        {log.type === "Adjustment" && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#FFEAEA] px-2.5 py-0.5 text-[9px] font-black text-[#FF5C5C] uppercase tracking-wide">
                            <span className="text-[10px]">📊</span> Adjustment
                          </span>
                        )}
                      </td>

                      {/* TRANSACTION QUANTITY VOLUME CELL */}
                      <td
                        className={`whitespace-nowrap px-6 py-4 text-center text-xs font-black ${
                          log.quantity > 0
                            ? "text-[#40AA22]"
                            : log.type === "Adjustment"
                              ? "text-[#FF5C5C]"
                              : "text-[#2D311B]"
                        }`}
                      >
                        {log.quantity > 0
                          ? `+ ${log.quantity}`
                          : log.quantity.toString().replace("-", "- ")}
                      </td>

                      {/* BEFORE STAT */}
                      <td className="whitespace-nowrap px-6 py-4 text-center text-xs text-[#7C8465] font-bold">
                        {log.before}
                      </td>

                      {/* AFTER RESULTING BALANCE STOCK VALUE */}
                      <td className="whitespace-nowrap px-6 py-4 text-center text-xs font-black text-[#1E2516]">
                        {log.after}
                      </td>

                      {/* ARCHIVE ENTRY EXECUTION SPECIFIC TRIGGERS */}
                      <td className="whitespace-nowrap px-6 py-4 text-right pr-8 text-[#7C8465]">
                        <button className="p-1.5 hover:bg-[#F2F6E6] hover:text-[#4D6636] rounded-lg transition-colors">
                          <InvoiceIcon className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SEGMENT FOOTER DATA LIST INTERACTIVE PAGINATION PANEL */}
            <div className="bg-[#F9FBF3]/50 border-t border-[#E5E9D5] px-6 py-4 flex items-center justify-between text-xs font-bold text-[#7C8465]">
              <div>
                Showing <span className="text-[#1E2516]">1 to 10</span> of{" "}
                <span className="text-[#1E2516]">4,230</span> entries
              </div>

              <div className="flex items-center gap-1.5">
                <button className="p-1.5 rounded-lg border border-[#E1E6CE] bg-white text-[#BAC29E] cursor-not-allowed">
                  <ChevronLeftIcon className="w-3.5 h-3.5" />
                </button>

                <button className="h-7 w-7 rounded-full bg-[#4D6636] text-white flex items-center justify-center font-black text-xs">
                  1
                </button>
                <button className="h-7 w-7 rounded-full hover:bg-[#EAEEDC] text-[#4D5335] flex items-center justify-center transition-colors text-xs">
                  2
                </button>
                <button className="h-7 w-7 rounded-full hover:bg-[#EAEEDC] text-[#4D5335] flex items-center justify-center transition-colors text-xs">
                  3
                </button>

                <span className="px-1 text-[#BAC29E]">...</span>

                <button className="h-7 w-7 rounded-full hover:bg-[#EAEEDC] text-[#4D5335] flex items-center justify-center transition-colors text-xs">
                  423
                </button>

                <button className="p-1.5 rounded-lg border border-[#E1E6CE] bg-white text-[#4D5335] hover:bg-gray-50 transition-colors">
                  <ChevronRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// --- SUB-ELEMENTS ISOLATED HELPERS CONFIGURATION MATRIX ---
interface FilterTabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}
function FilterTab({ label, active, onClick }: FilterTabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
        active
          ? "bg-[#C1F161] text-[#1E2516] shadow-sm font-black"
          : "text-[#7C8465] hover:text-[#2D311B] hover:bg-[#EAEEDC]/50"
      }`}
    >
      {label}
    </button>
  );
}

// --- TYPE-SAFE EXPLICIT INLINE ATTRIBUTES SVG ASSET PACK ---
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
const WalletIcon = (props: SVGProps) => (
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
      d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6A2.25 2.25 0 0 1 18.75 20.25H5.25A2.25 2.25 0 0 1 3 18.125V12m18 0c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m18 0v-1.5A2.25 2.25 0 0 0 18.75 8.25h-13.5A2.25 2.25 0 0 0 3 10.5V12"
    />
  </svg>
);
const ClipboardCheckIcon = (props: SVGProps) => (
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
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.732 2.076 1.719M9 3.75h.008v.008H9V3.75Zm0 3h.008v.008H9V6.75Zm0 3h.008v.008H9V9.75Z"
    />
  </svg>
);
const RecycleIcon = (props: SVGProps) => (
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
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);
const CalendarIcon = (props: SVGProps) => (
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
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
  </svg>
);
const ChevronDownIcon = (props: SVGProps) => (
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
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);
const SlidersIcon = (props: SVGProps) => (
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
      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 1 1 0 3m0-3a1.5 1.5 0 1 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 1 1 0 3m0-3a1.5 1.5 0 1 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 1 1 0 3m0-3a1.5 1.5 0 1 0 0 3m0 9.75V10.5"
    />
  </svg>
);
const InvoiceIcon = (props: SVGProps) => (
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
const DeliveryIcon = (props: SVGProps) => (
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
      d="M8.25 18.75a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.321-5.128a2.25 2.25 0 0 0-2.236-2.112h-4.5a1.125 1.125 0 0 0-1.125 1.125v9.75M8.25 18.75h6.75M12 14.25H3.375M12 14.25V3.375a1.125 1.125 0 0 1 1.125-1.125h1.5a1.125 1.125 0 0 1 1.125 1.125v2.25m3 3h1.5c.621 0 1.125.504 1.125 1.125v1.5a1.125 1.125 0 0 1-1.125 1.125H16.5"
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
