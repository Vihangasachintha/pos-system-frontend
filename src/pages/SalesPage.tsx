import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

// --- TS Type Definitions ---
interface SaleItem {
  invoiceId: string;
  dateTime: string;
  customer: string;
  itemsCount: number;
  totalAmount: number;
  paymentMethod: 'Card' | 'Cash' | 'Transfer';
  status: 'COMPLETED' | 'REFUNDED';
}

interface KPIProps {
  title: string;
  value: string | number;
  trend: string;
  trendColorClass: string;
  iconBg: string;
  icon: React.ReactNode;
}

export default function SalesHistory() {
  // Mock Data matching the design specifications precisely
  const [sales] = useState<SaleItem[]>([
    {
      invoiceId: '#INV-9402',
      dateTime: 'Today, 14:24 PM',
      customer: 'John D. (Guest)',
      itemsCount: 12,
      totalAmount: 245.90,
      paymentMethod: 'Card',
      status: 'COMPLETED',
    },
    {
      invoiceId: '#INV-9401',
      dateTime: 'Today, 13:10 PM',
      customer: 'Guest',
      itemsCount: 3,
      totalAmount: 32.15,
      paymentMethod: 'Cash',
      status: 'COMPLETED',
    },
    {
      invoiceId: '#INV-9400',
      dateTime: 'Today, 12:45 PM',
      customer: 'Sarah Mitchell',
      itemsCount: 8,
      totalAmount: 112.00,
      paymentMethod: 'Transfer',
      status: 'REFUNDED',
    },
    {
      invoiceId: '#INV-9399',
      dateTime: 'Today, 12:02 PM',
      customer: 'Guest',
      itemsCount: 1,
      totalAmount: 5.50,
      paymentMethod: 'Cash',
      status: 'COMPLETED',
    },
    {
      invoiceId: '#INV-9398',
      dateTime: 'Today, 11:30 AM',
      customer: 'Mark Roberts',
      itemsCount: 45,
      totalAmount: 1420.75,
      paymentMethod: 'Card',
      status: 'COMPLETED',
    }
  ]);

  return (
    <div className="flex-1 pl-20 bg-[#F7F9EE] font-sans text-[#2D311B] min-h-screen">
      <Sidebar/>
      {/* TOP NAVBAR CONTAINER */}
      <header className="flex h-20 items-center justify-between border-b border-[#E5E9D5] bg-[#F7F9EE]/80 backdrop-blur-md px-8 sticky top-0 z-10">
        <h1 className="text-xl font-bold tracking-tight text-[#1E2516]">Sales History</h1>
        
        {/* Profile and Utility Actions Controls */}
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-xs md:w-64">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-[#7C8465]">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search invoices..."
              className="w-full rounded-full border border-[#E1E6CE] bg-[#EEF2DF] py-2 pl-10 pr-4 text-sm font-medium text-[#2D311B] placeholder-[#7C8465] outline-none transition-all focus:border-[#4D6636] focus:bg-white"
            />
          </div>

          <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#E1E6CE] bg-white text-[#2D311B]">
            <BellIcon />
            <span className="absolute top-2.5 right-3.5 h-2 w-2 rounded-full bg-[#FF5C5C]"></span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1E6CE] bg-white text-[#2D311B]">
            <SettingsIcon />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1E6CE] bg-white text-[#2D311B]">
            <HelpIcon />
          </button>
          
          <div className="h-8 w-px bg-[#E1E6CE] mx-1"></div>

          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="User Workspace Profile"
            className="h-10 w-10 rounded-full object-cover border border-[#E1E6CE]"
          />
        </div>
      </header>

      {/* DASHBOARD SALES VIEW CONTENT */}
      <main className="p-8 max-w-[1600px] mx-auto space-y-6">
        
        {/* TOP LEVEL HIGH-VALUE KPIS METRIC GRID */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <KPICard
            title="TOTAL SALES TODAY"
            value="142"
            trend="↗ +12% vs yesterday"
            trendColorClass="text-[#40AA22]"
            iconBg="bg-[#C1F161]"
            icon={<ShoppingBagIcon />}
          />
          <KPICard
            title="TOTAL REVENUE TODAY"
            value="$12,482.50"
            trend="↗ +8.4% vs yesterday"
            trendColorClass="text-[#40AA22]"
            iconBg="bg-[#C1F161]"
            icon={<CashIcon />}
          />
          <KPICard
            title="AVERAGE ORDER VALUE"
            value="$87.90"
            trend="— Stable vs yesterday"
            trendColorClass="text-[#7C8465]"
            iconBg="bg-[#C1F161]"
            icon={<ChartBarIcon />}
          />
        </section>

        {/* INTERACTION FILTER TOOLBAR CONTROLS */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Range Date Picker Mock Dropdown Selector */}
            <div className="flex items-center gap-2 rounded-xl border border-[#E1E6CE] bg-white px-4 py-2.5 text-xs font-bold text-[#4D5335] shadow-sm cursor-pointer select-none">
              <CalendarIcon />
              <span>Oct 24, 2023 - Oct 30, 2023</span>
              <ChevronDownIcon />
            </div>

            {/* Payment Filter Selection */}
            <button className="flex items-center gap-2 rounded-xl border border-[#E1E6CE] bg-white px-4 py-2.5 text-xs font-bold text-[#4D5335] shadow-sm hover:bg-gray-50">
              <span>Payment Method</span>
              <FilterIcon />
            </button>

            {/* Status Filter Selection */}
            <button className="flex items-center gap-2 rounded-xl border border-[#E1E6CE] bg-white px-4 py-2.5 text-xs font-bold text-[#4D5335] shadow-sm hover:bg-gray-50">
              <span>Status</span>
              <SlidersIcon />
            </button>
          </div>

          {/* Export Dataset Button Container */}
          <button className="flex items-center gap-2 rounded-xl bg-[#4D6636] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#3E522B] transition-all shadow-md shadow-[#4D6636]/10">
            <DownloadIcon />
            Export CSV
          </button>
        </div>

        {/* INVOICES DATA LIST TABLE BLOCK */}
        <div className="overflow-hidden rounded-2xl border border-[#E5E9D5] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#E5E9D5] bg-[#F9FBF3] text-[11px] font-extrabold tracking-wider text-[#7C8465] uppercase">
                  <th className="px-6 py-4">Invoice #</th>
                  <th className="px-6 py-4">Date &amp; Time</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Items</th>
                  <th className="px-6 py-4">Total Amount</th>
                  <th className="px-6 py-4">Payment</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right pr-8">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F3E6] text-[#2D311B] font-medium">
                {sales.map((sale) => (
                  <tr key={sale.invoiceId} className="hover:bg-[#F9FBF3]/40 transition-colors">
                    {/* Invoice ID */}
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-[#1E2516]">
                      {sale.invoiceId}
                    </td>
                    {/* Log Date Time Cell */}
                    <td className="whitespace-nowrap px-6 py-4 text-[#7C8465] text-xs">
                      {sale.dateTime}
                    </td>
                    {/* Customer Info Name Cell */}
                    <td className="whitespace-nowrap px-6 py-4 text-[#4D5335]">
                      {sale.customer}
                    </td>
                    {/* Units Sum Column */}
                    <td className="whitespace-nowrap px-6 py-4 text-[#4D5335] pl-8">
                      {sale.itemsCount}
                    </td>
                    {/* Financial Sum Balance Cell */}
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-[#1E2516]">
                      ${sale.totalAmount.toFixed(2)}
                    </td>
                    {/* Payment Interface Methods Dynamic Selector Render */}
                    <td className="whitespace-nowrap px-6 py-4 text-[#4D5335]">
                      <div className="flex items-center gap-1.5 text-xs">
                        {sale.paymentMethod === 'Card' && <PaymentCardIcon />}
                        {sale.paymentMethod === 'Cash' && <PaymentCashIcon />}
                        {sale.paymentMethod === 'Transfer' && <PaymentTransferIcon />}
                        <span>{sale.paymentMethod}</span>
                      </div>
                    </td>
                    {/* Operational Status Badging Matrix Options mapping layout */}
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wide uppercase ${
                        sale.status === 'COMPLETED' ? 'bg-[#E5F7E4] text-[#2B8618]' : 'bg-[#FFEAEA] text-[#FF5C5C]'
                      }`}>
                        <span className={`h-1 w-1 rounded-full ${
                          sale.status === 'COMPLETED' ? 'bg-[#40AA22]' : 'bg-[#FF5C5C]'
                        }`}></span>
                        {sale.status}
                      </span>
                    </td>
                    {/* Document View Explicit Execution Anchors */}
                    <td className="whitespace-nowrap px-6 py-4 text-right pr-8">
                      <button className="text-xs font-bold text-[#4D6636] hover:underline">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* BLOCK TABLE INTERACTION PAGINATION FOOTER MODULES */}
          <div className="border-t border-[#E5E9D5] bg-white px-6 py-4 flex items-center justify-between text-xs font-semibold text-[#7C8465]">
            <div>
              Showing 1 to 5 of 142 transactions
            </div>
            
            <div className="flex items-center gap-2">
              <button disabled className="p-1.5 rounded-lg border border-[#E1E6CE] text-[#BAC29E] bg-white cursor-not-allowed">
                <ChevronLeftIcon />
              </button>
              <button className="h-7 w-7 flex items-center justify-center rounded-lg bg-[#4D6636] text-white font-bold">
                1
              </button>
              <button className="p-1.5 rounded-lg border border-[#E1E6CE] text-[#4D5335] bg-white hover:bg-gray-50 transition-colors">
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

// --- KPI DISPLAY HELPER SUB-MODULE MODULE ---
function KPICard({ title, value, trend, trendColorClass, iconBg, icon }: KPIProps) {
  return (
    <div className="rounded-2xl border border-[#E5E9D5] bg-white p-6 shadow-sm flex items-center justify-between">
      <div className="space-y-1.5">
        <p className="text-[10px] font-bold tracking-wider text-[#7C8465] uppercase">{title}</p>
        <h3 className="text-2xl font-black text-[#1E2516]">{value}</h3>
        <p className={`text-xs font-bold ${trendColorClass}`}>{trend}</p>
      </div>
      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${iconBg} text-[#2D311B]`}>
        {icon}
      </div>
    </div>
  );
}

// --- UTILITY DECOUPLED SVG LIBRARY WITH TYPE CONTRACTS ---
type SVGProps = React.SVGProps<SVGSVGElement>;

const SearchIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" />
  </svg>
);
const BellIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);
const SettingsIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.767c-.31.236-.456.63-.385 1.01.016.082.025.167.025.252 0 .085-.009.17-.025.252-.07.38-.05 1.15.385 1.386l1.002.767a1.125 1.125 0 0 1 .26 1.43l-1.297 2.247a1.125 1.125 0 0 1-1.37.491l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.767c.31-.236.456-.63.385-1.01a3.45 3.45 0 0 1-.026-.252c0-.085.009-.17.026-.252.07-.38.05-1.15-.385-1.386l-1.004-.767a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  </svg>
);
const HelpIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
  </svg>
);
const CalendarIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#7C8465]" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);
const ChevronDownIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 text-[#7C8465] ml-1" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);
const FilterIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#7C8465]" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A50.065 50.065 0 0 1 12 3Z" />
  </svg>
);
const SlidersIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#7C8465]" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
  </svg>
);
const DownloadIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);
const ChevronLeftIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);
const ChevronRightIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// --- TABLE PAYMENTS LOGO INSET PACK ---
const PaymentCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#7C8465]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
  </svg>
);
const PaymentCashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#7C8465]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5M4.5 19.5h15M5.25 7.5h13.5m-13.5 3h13.5m-13.5 3h13.5m-13.5 3h13.5" />
  </svg>
);
const PaymentTransferIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#7C8465]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5h-15V21h15Z" />
  </svg>
);

// --- SUMMARY BOX SPECIFIC PACKS ---
const ShoppingBagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.119-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
);
const CashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5M4.5 19.5h15M5.25 7.5h13.5m-13.5 3h13.5m-13.5 3h13.5m-13.5 3h13.5" />
  </svg>
);
const ChartBarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);