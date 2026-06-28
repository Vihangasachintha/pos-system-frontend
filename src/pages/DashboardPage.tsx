import React from "react";
import Sidebar from "../components/Sidebar";

// --- Type Definitions ---
interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  iconBg: string;
  cardBg?: string;
  borderColor?: string;
  titleColor?: string;
  badge?: React.ReactNode;
  icon: React.ReactNode;
}

interface ActivityItemProps {
  type: "transaction" | "stock-in" | "alert";
  title: string;
  meta: string;
  value: string;
  time: string;
  valueColorClass?: string;
}

interface StockPriorityItemProps {
  name: string;
  status: "CRITICAL" | "WARNING";
  remaining: string;
  minQty: number;
  progress: number; // percentage 0-100
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#F7F9EE] font-sans text-[#2D311B]">
      <Sidebar />

      {/* MAIN CONTAINER */}
      <div className="flex-1 pl-20">
        {/* 2. TOP NAVBAR */}
        <header className="flex h-20 items-center justify-between border-b border-[#E5E9D5] bg-[#F7F9EE]/80 backdrop-blur-md px-8 sticky top-0 z-10">
          <div className="flex items-center gap-6 flex-1">
            <h1 className="text-xl font-bold tracking-tight text-[#1E2516]">
              Herath Super
            </h1>

            {/* Search Bar */}
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#7C8465]">
                <SearchIcon />
              </span>
              <input
                type="text"
                placeholder="Search products, orders..."
                className="w-full rounded-full border border-[#E1E6CE] bg-[#EEF2DF] py-2.5 pl-11 pr-4 text-sm font-medium text-[#2D311B] placeholder-[#7C8465] outline-none transition-all focus:border-[#4D6636] focus:bg-white"
              />
            </div>
          </div>

          {/* Profile & Controls */}
          <div className="flex items-center gap-4">
            <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#E1E6CE] bg-white text-[#2D311B] hover:bg-gray-50">
              <BellIcon />
              <span className="absolute top-2.5 right-3.5 h-2 w-2 rounded-full bg-[#FF5C5C]"></span>
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E1E6CE] bg-white text-[#2D311B] hover:bg-gray-50">
              <SettingsIcon />
            </button>

            <div className="h-8 w-px bg-[#E1E6CE] mx-1"></div>

            {/* Profile widget */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-[#1E2516]">
                  Pramod Dilshan
                </p>
                <p className="text-[10px] font-bold tracking-wider text-[#7C8465] uppercase">
                  Shop Owner
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Profile"
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
            </div>
          </div>
        </header>

        {/* 3. MAIN DASHBOARD CONTENT */}
        <main className="p-8 space-y-8 max-w-[1600px] mx-auto">
          {/* GRID: Kpis / Summary Metrics */}
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="TOTAL PRODUCTS"
              value="1,284"
              subtitle="ALL TIME"
              iconBg="bg-[#EEF2DF]"
              icon={<BoxIcon2 />}
            />
            <MetricCard
              title="LOW STOCK ITEMS"
              value="24"
              subtitle="ACTION REQUIRED"
              iconBg="bg-[#FFD6D6]"
              cardBg="bg-[#FFEAEA]"
              borderColor="border-[#FFC1C1]"
              titleColor="text-[#A71D1D]"
              icon={<AlertTriangleIcon />}
            />
            <MetricCard
              title="TODAY'S REVENUE"
              value="$4,520"
              subtitle="(142 orders)"
              iconBg="bg-[#EEF2DF]"
              badge={
                <span className="flex items-center text-[11px] font-bold text-[#40AA22]">
                  ▲ 12%
                </span>
              }
              icon={<TrendingUpIcon />}
            />
            <MetricCard
              title="TODAY'S EXPENSES"
              value="$842.15"
              subtitle="OPERATIONAL"
              iconBg="bg-[#EEF2DF]"
              icon={<ReceiptIcon2 />}
            />
          </section>

          {/* GRID: Main Content Layout */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left Column (Spans 2): Recent Activity */}
            <section className="lg:col-span-2 rounded-3xl border border-[#E5E9D5] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-[#1E2516]">
                  Recent Activity
                </h2>
                <button className="text-xs font-bold text-[#7C8465] hover:text-[#1E2516] tracking-wider uppercase">
                  View All Logs
                </button>
              </div>

              <div className="divide-y divide-[#F0F3E6]">
                <ActivityItem
                  type="transaction"
                  title="New Transaction #RD-9021"
                  meta="3 items sold • Cash payment"
                  value="+$124.50"
                  time="2 MINS AGO"
                  valueColorClass="text-[#40AA22]"
                />
                <ActivityItem
                  type="stock-in"
                  title="Stock In: Fresh Organic Apples"
                  meta="Supplier: Green Valley Farms"
                  value="+50 units"
                  time="15 MINS AGO"
                  valueColorClass="text-[#4D6636]"
                />
                <ActivityItem
                  type="alert"
                  title="Critical Low Stock Alert"
                  meta="Whole Milk (1L Carton)"
                  value="3 left"
                  time="1 HR AGO"
                  valueColorClass="text-[#FF5C5C]"
                />
                <ActivityItem
                  type="transaction"
                  title="New Transaction #RD-9018"
                  meta="1 item sold • Credit Card"
                  value="+$42.20"
                  time="2 HRS AGO"
                  valueColorClass="text-[#40AA22]"
                />
              </div>
            </section>

            {/* Right Column (Spans 1): Sidebar Controls */}
            <div className="space-y-6">
              {/* Card Section: Stock Priority */}
              <section className="rounded-3xl border border-[#E5E9D5] bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-[#1E2516] mb-4">
                  Stock Priority
                </h2>

                <div className="space-y-4">
                  <StockPriorityItem
                    name="Premium Arabica Coffee"
                    status="CRITICAL"
                    remaining="Only 8 bags remaining"
                    minQty={60}
                    progress={15}
                  />
                  <StockPriorityItem
                    name="Fresh Chicken Breast"
                    status="WARNING"
                    remaining="14 kg remaining"
                    minQty={40}
                    progress={40}
                  />
                </div>

                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#4D6636] bg-white py-3 text-sm font-bold text-[#4D6636] transition-colors hover:bg-[#F7F9EE]">
                  <CartIcon />
                  Create Restock Order
                </button>
              </section>

              {/* Card Section: Performance Goal Target */}
              <section className="rounded-3xl bg-[#445E2F] p-6 text-white shadow-sm">
                <p className="text-[10px] font-bold tracking-wider text-[#C0E763] uppercase mb-1">
                  Performance Goal
                </p>
                <h3 className="text-xl font-bold mb-5">84% of Daily Target</h3>

                <div className="flex items-center gap-5">
                  {/* Radial/Circle Progress Metric */}
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-[#5E7948] bg-transparent">
                    <span className="text-sm font-bold">84%</span>
                    {/* Visual Outer Fill Indicator Mock */}
                    <div className="absolute inset-1 rounded-full border-4 border-[#C1F161] clip-path-progress"></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#C1F161]">
                      $5,400 left to goal
                    </h4>
                    <p className="text-xs text-[#E1E6CE] mt-0.5">
                      Projected finish: 102%
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* 4. BOTTOM QUICK ACTIONS BAR */}
          <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <QuickActionButton
              icon={<PlusSquareIcon />}
              label="Quick Add Product"
            />
            <QuickActionButton icon={<BarcodeIcon />} label="Stock Audit" />
            <QuickActionButton icon={<UsersIcon />} label="Staff Management" />
            <QuickActionButton
              icon={<ChartSquareIcon />}
              label="Monthly Report"
            />
          </section>
        </main>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3E552C] text-[#C1F161] shadow-lg shadow-black/10 hover:bg-[#344725] transition-transform active:scale-95">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}

// --- SUB-COMPONENTS & UI MODULES ---

function MetricCard({
  title,
  value,
  subtitle,
  iconBg,
  cardBg = "bg-white",
  borderColor = "border-[#E5E9D5]",
  titleColor = "text-[#7C8465]",
  badge,
  icon,
}: MetricCardProps) {
  return (
    <div
      className={`rounded-3xl border ${borderColor} ${cardBg} p-6 shadow-sm flex flex-col justify-between min-h-35`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} text-[#2D311B]`}
        >
          {icon}
        </div>
        {badge ? (
          badge
        ) : (
          <span className="text-[10px] font-bold tracking-wider text-[#A1AA84] uppercase">
            {subtitle}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p
          className={`text-[10px] font-bold tracking-wider ${titleColor} uppercase`}
        >
          {title}
        </p>
        <h3 className="text-2xl font-black text-[#1E2516] mt-0.5">{value}</h3>
        {badge && (
          <p className="text-[10px] font-medium text-[#7C8465] mt-0.5">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

function ActivityItem({
  type,
  title,
  meta,
  value,
  time,
  valueColorClass = "text-[#2D311B]",
}: ActivityItemProps) {
  return (
    <div className="flex items-center justify-between py-4.5 first:pt-0 last:pb-0">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
            type === "transaction"
              ? "bg-[#EEF2DF]"
              : type === "stock-in"
                ? "bg-[#E6ECE0]"
                : "bg-[#FFEAEA]"
          }`}
        >
          {type === "transaction" && (
            <CartIcon className="w-5 h-5 text-[#4D6636]" />
          )}
          {type === "stock-in" && (
            <BoxIcon2 className="w-5 h-5 text-[#4D6636]" />
          )}
          {type === "alert" && <AlertTriangleIcon />}
        </div>
        <div>
          <h4 className="text-sm font-bold text-[#1E2516]">{title}</h4>
          <p className="text-xs text-[#7C8465] mt-0.5">{meta}</p>
        </div>
      </div>
      <div className="text-right">
        <span className={`text-sm font-bold ${valueColorClass}`}>{value}</span>
        <p className="text-[9px] font-bold tracking-wider text-[#BAC29E] mt-0.5">
          {time}
        </p>
      </div>
    </div>
  );
}

function StockPriorityItem({
  name,
  status,
  remaining,
  minQty,
  progress,
}: StockPriorityItemProps) {
  const isCritical = status === "CRITICAL";
  return (
    <div
      className={`rounded-2xl border ${isCritical ? "border-[#FFD6D6] bg-[#FFF8F8]" : "border-[#EBEFD9] bg-[#F9FBF3]"} p-4`}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-bold text-[#1E2516]">{name}</h4>
        <span
          className={`rounded-md px-1.5 py-0.5 text-[9px] font-extrabold tracking-wider ${
            isCritical
              ? "bg-[#FFD6D6] text-[#A71D1D]"
              : "bg-[#E1E6CE] text-[#5B6341]"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Custom Progress Bar Line */}
      <div className="h-2 w-full rounded-full bg-[#E5E9D5] overflow-hidden">
        <div
          className={`h-full rounded-full ${isCritical ? "bg-[#A71D1D]" : "bg-[#7C8465]"}`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-2 text-[11px] font-medium text-[#7C8465]">
        {remaining} <span className="text-[#BAC29E] ml-1">(Min: {minQty})</span>
      </p>
    </div>
  );
}

// function SidebarLink({
//   icon,
//   label,
//   active = false,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   active?: boolean;
// }) {
//   return (
//     <a
//       href={`#${label.toLowerCase()}`}
//       className={`flex w-full flex-col items-center justify-center rounded-xl py-2.5 transition-all ${
//         active
//           ? "bg-[#C1F161] text-[#1E2516] font-bold shadow-md shadow-[#C1F161]/10"
//           : "text-[#BAC29E] hover:bg-white/5 hover:text-white"
//       }`}
//     >
//       {icon}
//       <span className="mt-1 text-[9px] font-bold tracking-wider">{label}</span>
//     </a>
//   );
// }

function QuickActionButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex items-center gap-3 rounded-2xl border border-[#E5E9D5] bg-[#EAEEDC] p-4 text-left transition-colors hover:bg-[#E1E6CE]">
      <div className="text-[#4D6636]">{icon}</div>
      <span className="text-sm font-bold text-[#2D311B]">{label}</span>
    </button>
  );
}

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z"
    />
  </svg>
);
const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
    />
  </svg>
);
const SettingsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.767c-.31.236-.456.63-.385 1.01.016.082.025.167.025.252 0 .085-.009.17-.025.252-.07.38-.05 1.15.385 1.386l1.002.767a1.125 1.125 0 0 1 .26 1.43l-1.297 2.247a1.125 1.125 0 0 1-1.37.491l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.767c.31-.236.456-.63.385-1.01a3.45 3.45 0 0 1-.026-.252c0-.085.009-.17.026-.252.07-.38.05-1.15-.385-1.386l-1.004-.767a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
const BoxIcon2 = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    />
  </svg>
);
const AlertTriangleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    />
  </svg>
);
const TrendingUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
    />
  </svg>
);
const ReceiptIcon2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h16.5M4.5 19.5h15M5.25 7.5h13.5m-13.5 3h13.5m-13.5 3h13.5m-13.5 3h13.5"
    />
  </svg>
);
const CartIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.25M16.5 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-8.25 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    />
  </svg>
);
const PlusSquareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const BarcodeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
    />
  </svg>
);
const UsersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-2.533-3.076m-1.724-4.456A4.5 4.5 0 0114.25 6M12 10.5a3 3 0 11-6 0 3 3 0 016 0zm-3 4.5a4.5 4.5 0 00-4.5 4.5v.75m11.963-14.25a4.5 4.5 0 00-3.353 3.353M15 12.75a4.5 4.5 0 013.182 3.182"
    />
  </svg>
);
const ChartSquareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0 0 2.25-2.25H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
    />
  </svg>
);
