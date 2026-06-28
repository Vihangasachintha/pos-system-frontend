import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

// --- TS Type Definitions ---
interface ExpenseItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  category: 'UTILITIES' | 'RENT' | 'INVENTORY' | 'SALARIES' | 'OTHER';
  amount: string;
  status: 'PAID' | 'PENDING';
  iconType: 'electricity' | 'rent' | 'inventory' | 'salaries' | 'other';
}

export default function ExpensesDashboard() {
  // Data mirrored directly from image_f9a1d9.png
  const [expenses] = useState<ExpenseItem[]>([
    {
      id: '1',
      title: 'Monthly Electricity Bill',
      subtitle: 'Invoice #EB-2023-1024',
      date: 'Oct 24, 2023',
      category: 'UTILITIES',
      amount: '$1,450.00',
      status: 'PAID',
      iconType: 'electricity'
    },
    {
      id: '2',
      title: 'Store Rent - Downtown',
      subtitle: 'Q4 Property Management',
      date: 'Oct 20, 2023',
      category: 'RENT',
      amount: '$8,500.00',
      status: 'PAID',
      iconType: 'rent'
    },
    {
      id: '3',
      title: 'Organic Produce Restock',
      subtitle: 'Green Valley Farms',
      date: 'Oct 28, 2023',
      category: 'INVENTORY',
      amount: '$3,240.50',
      status: 'PENDING',
      iconType: 'inventory'
    },
    {
      id: '4',
      title: 'Staff Weekly Salaries',
      subtitle: 'Week ending Oct 27',
      date: 'Oct 27, 2023',
      category: 'SALARIES',
      amount: '$12,800.00',
      status: 'PAID',
      iconType: 'salaries'
    },
    {
      id: '5',
      title: 'IT Support & Maintenance',
      subtitle: 'Annual Subscription',
      date: 'Oct 15, 2023',
      category: 'OTHER',
      amount: '$850.00',
      status: 'PENDING',
      iconType: 'other'
    }
  ]);

  const [activeStatusFilter, setActiveStatusFilter] = useState<'All' | 'Paid' | 'Pending'>('All');

  return (
    <div className="flex pl-20 min-h-screen w-full bg-[#F7F9EE] font-sans text-[#2D311B]">
      
      <Sidebar/>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* GLOBAL HEADER */}
        <header className="h-20 border-b border-[#E5E9D5] px-8 flex items-center justify-between bg-[#F7F9EE]/80 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-8 flex-1">
            <h1 className="text-xl font-bold tracking-tight text-[#1E2516]">
            Expenses
          </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-transparent relative text-[#2D311B]">
              <BellIcon className="w-5 h-5" />
              <span className="absolute top-2.5 right-3.5 h-1.5 w-1.5 rounded-full bg-[#FF5C5C]"></span>
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-xl bg-transparent text-[#2D311B]">
              <SettingsIcon className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5 pl-3 border-l border-[#E5E9D5]">
              <div className="text-right">
                <p className="text-xs font-black text-[#1E2516]">Alex Manager</p>
                <p className="text-[10px] font-bold text-[#7C8465]">Store Manager</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Profile"
                className="h-9 w-9 rounded-full object-cover border border-[#E1E6CE]"
              />
            </div>
          </div>
        </header>

        {/* WORKSPACE WRAPPER */}
        <main className="p-8 space-y-6 max-w-350 w-full mx-auto">
          
          {/* BREADCRUMB & TITLE HEADER PANEL */}
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#7C8465]">
                <span>Admin</span>
                <span>/</span>
                <span className="text-[#4D6636]">Expenses</span>
              </div>
              <h2 className="text-2xl font-black text-[#1E2516] tracking-tight mt-1">Business Expenses</h2>
            </div>
            <button className="bg-[#C1F161] hover:bg-[#b0dc52] text-[#1E2516] transition-colors rounded-xl px-5 py-2.5 text-xs font-black flex items-center gap-2 shadow-sm">
              <PlusIcon className="w-4 h-4 stroke-3" />
              <span>Add Expense</span>
            </button>
          </div>

          {/* TOP METRIC CARDS SECTION */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* TOTAL EXPENSES */}
            <div className="bg-white rounded-2xl border border-[#E5E9D5] p-5 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="h-8 w-8 rounded-lg bg-[#E5F7E4] text-[#2B8618] flex items-center justify-center font-bold text-sm">
                  €
                </div>
                <span className="text-[10px] font-black bg-[#FFEAEA] text-[#FF5C5C] px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                  📈 12.5%
                </span>
              </div>
              <div className="mt-4 space-y-0.5">
                <p className="text-[10px] font-black text-[#7C8465] uppercase tracking-wider">Total Expenses (Monthly)</p>
                <h3 className="text-2xl font-black text-[#1E2516] tracking-tight">$42,850.00</h3>
                <p className="text-[10px] font-bold text-[#7C8465] pt-1">
                  Compared to $38,100 last month
                </p>
              </div>
            </div>

            {/* PENDING PAYMENTS */}
            <div className="bg-white rounded-2xl border border-[#E5E9D5] p-5">
              <div className="h-8 w-8 rounded-lg bg-[#EEF2DF] text-[#4D5335] flex items-center justify-center">
                <ContractIcon className="w-4 h-4" />
              </div>
              <div className="mt-4 space-y-0.5">
                <p className="text-[10px] font-black text-[#7C8465] uppercase tracking-wider">Pending Payments</p>
                <h3 className="text-2xl font-black text-[#1E2516] tracking-tight">14</h3>
                <div className="flex items-center gap-1.5 pt-1">
                  <div className="flex -space-x-1.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#C1F161] border border-white"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#BAC29E] border border-white"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#E5E9D5] border border-white"></span>
                  </div>
                  <p className="text-[10px] font-bold text-[#7C8465]">Awaiting manager approval</p>
                </div>
              </div>
            </div>

            {/* TOP CATEGORY */}
            <div className="bg-white rounded-2xl border border-[#E5E9D5] p-5 relative overflow-hidden">
              <span className="absolute right-4 top-2 text-[48px] font-black text-[#F7F9EE] select-none">⚡</span>
              <div className="flex items-center justify-between">
                <div className="h-8 w-8 rounded-lg bg-[#EEF2DF] text-[#4D5335] flex items-center justify-center">
                  <CategoryGridIcon className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-black bg-[#EEF2DF] text-[#4D5335] px-2 py-0.5 rounded-md tracking-wider uppercase">
                  Utilities
                </span>
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-[10px] font-black text-[#7C8465] uppercase tracking-wider">Top Category</p>
                <h3 className="text-2xl font-black text-[#1E2516] tracking-tight">$12,400.00</h3>
                <div className="w-full bg-[#EEF2DF] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#C1F161] h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </section>

          {/* FILTERS CONTROL PANEL TOOLBAR */}
          <section className="bg-white rounded-xl border border-[#E5E9D5] p-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              {/* DATE RANGE FILTER */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-black text-[#7C8465] uppercase tracking-wider pl-1">Date Range</label>
                <div className="relative">
                  <select className="appearance-none bg-[#F7F9EE] border border-[#E1E6CE] rounded-lg text-xs font-bold text-[#1E2516] pl-8 pr-8 py-2 outline-none cursor-pointer">
                    <option>This Month (Oct 2023)</option>
                    <option>Last Month</option>
                    <option>Custom Range</option>
                  </select>
                  <span className="absolute left-2.5 top-2.5 text-[#7C8465]">📅</span>
                  <span className="absolute right-2.5 top-3 text-[9px] text-[#7C8465]">▼</span>
                </div>
              </div>

              {/* CATEGORY FILTER */}
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-black text-[#7C8465] uppercase tracking-wider pl-1">Category</label>
                <div className="relative">
                  <select className="appearance-none bg-[#F7F9EE] border border-[#E1E6CE] rounded-lg text-xs font-bold text-[#1E2516] pl-8 pr-8 py-2 outline-none cursor-pointer">
                    <option>All Categories</option>
                    <option>Utilities</option>
                    <option>Rent</option>
                    <option>Inventory</option>
                  </select>
                  <span className="absolute left-2.5 top-2.5 text-[#7C8465]">📋</span>
                  <span className="absolute right-2.5 top-3 text-[9px] text-[#7C8465]">▼</span>
                </div>
              </div>
            </div>

            {/* STATUS FILTER CONTROS + DOWNLOAD */}
            <div className="flex items-center gap-3 self-end">
              <div className="flex flex-col gap-1">
                <label className="text-[9px] font-black text-[#7C8465] uppercase tracking-wider pl-1">Status</label>
                <div className="bg-[#EEF2DF] p-1 rounded-lg flex items-center gap-1">
                  {(['All', 'Paid', 'Pending'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setActiveStatusFilter(status)}
                      className={`px-4 py-1 text-xs font-bold rounded-md transition-all ${
                        activeStatusFilter === status
                          ? 'bg-[#C1F161] text-[#1E2516] shadow-xs'
                          : 'text-[#7C8465] hover:text-[#1E2516]'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <button className="h-9 w-9 border border-[#E1E6CE] hover:bg-[#F7F9EE] transition-colors rounded-lg flex items-center justify-center text-[#1E2516] mt-5">
                <DownloadIcon className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* MAIN DATATABLE VIEW COMPONENT */}
          <div className="bg-white rounded-2xl border border-[#E5E9D5] shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E5E9D5] text-[10px] font-black uppercase tracking-wider text-[#7C8465] bg-[#F9FBF3]/50">
                    <th className="px-6 py-3.5">Title / Description</th>
                    <th className="px-6 py-3.5">Date</th>
                    <th className="px-6 py-3.5">Category</th>
                    <th className="px-6 py-3.5">Amount</th>
                    <th className="px-6 py-3.5">Status</th>
                    <th className="px-6 py-3.5 text-right pr-8">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F3E6] font-semibold text-[#2D311B]">
                  {expenses.map((item) => (
                    <tr key={item.id} className="hover:bg-[#F9FBF3]/40 transition-colors">
                      {/* Description */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-3.5">
                          <div className="h-9 w-9 rounded-xl bg-[#EEF2DF] text-[#4D5335] flex items-center justify-center text-sm">
                            {item.iconType === 'electricity' && '⚡'}
                            {item.iconType === 'rent' && '🏢'}
                            {item.iconType === 'inventory' && '📋'}
                            {item.iconType === 'salaries' && '👥'}
                            {item.iconType === 'other' && '•••'}
                          </div>
                          <div>
                            <p className="font-black text-[#1E2516] text-xs">{item.title}</p>
                            <p className="text-[10px] font-bold text-[#7C8465] mt-0.5">{item.subtitle}</p>
                          </div>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="whitespace-nowrap px-6 py-4 text-xs font-bold text-[#2D311B]">
                        {item.date}
                      </td>

                      {/* Category Label Pill */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <span className="inline-block bg-[#EEF2DF] text-[#7C8465] text-[9px] font-black tracking-wide px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                      </td>

                      {/* Amount */}
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-black text-[#1E2516]">
                        {item.amount}
                      </td>

                      {/* Status */}
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'PAID' ? 'bg-[#40AA22]' : 'bg-[#FF5C5C]'}`}></span>
                          <span className={`text-[10px] font-black tracking-wider uppercase ${item.status === 'PAID' ? 'text-[#2B8618]' : 'text-[#FF5C5C]'}`}>
                            {item.status}
                          </span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="whitespace-nowrap px-6 py-4 text-right pr-8">
                        <button className="text-[#BAC29E] hover:text-[#4D6636] p-1 transition-colors">
                          <EyeIcon className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* TABLE PAGINATION ROW */}
            <div className="bg-[#EEF2DF]/30 border-t border-[#E5E9D5] px-6 py-3.5 flex items-center justify-between text-xs font-bold text-[#7C8465]">
              <div>
                Showing <span className="text-[#1E2516]">1 to 5</span> of <span className="text-[#1E2516]">42</span> expenses
              </div>

              <div className="flex items-center gap-1">
                <button className="p-1 rounded text-[#BAC29E] cursor-not-allowed">◀</button>
                <button className="h-5 w-5 rounded bg-[#C1F161] text-[#1E2516] flex items-center justify-center font-black text-[11px]">1</button>
                <button className="h-5 w-5 rounded hover:bg-[#EEF2DF] text-[#4D5335] flex items-center justify-center text-[11px]">2</button>
                <button className="h-5 w-5 rounded hover:bg-[#EEF2DF] text-[#4D5335] flex items-center justify-center text-[11px]">3</button>
                <button className="p-1 rounded text-[#4D5335] hover:bg-[#EEF2DF]">▶</button>
              </div>
            </div>
          </div>

          {/* LOWER ANALYTICS ROW GRAPH CHARTS */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* DONUT CHART COMPONENT CONTAINER */}
            <div className="bg-white rounded-2xl border border-[#E5E9D5] p-6 lg:col-span-5 flex flex-col justify-between">
              <h4 className="text-xs font-black text-[#1E2516] tracking-tight">Category Distribution</h4>
              
              <div className="flex items-center justify-between mt-4">
                {/* Visual custom circular chart layout styling */}
                <div className="relative h-28 w-28 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-10 border-[#EEF2DF]"></div>
                  <div className="absolute inset-0 rounded-full border-10 border-transparent border-t-[#4D6636] border-r-[#C1F161] transform rotate-45"></div>
                  <div className="text-center z-10">
                    <p className="text-lg font-black text-[#1E2516]">65%</p>
                    <p className="text-[8px] uppercase tracking-widest font-black text-[#BAC29E]">Fixed</p>
                  </div>
                </div>

                <div className="space-y-2 flex-1 pl-8">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-bold text-[#7C8465]">
                      <span className="w-2 h-2 rounded-full bg-[#4D6636]"></span>
                      <span>Salaries & Rent</span>
                    </div>
                    <span className="font-black text-[#1E2516]">65%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-bold text-[#7C8465]">
                      <span className="w-2 h-2 rounded-full bg-[#C1F161]"></span>
                      <span>Utilities</span>
                    </div>
                    <span className="font-black text-[#1E2516]">25%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-bold text-[#7C8465]">
                      <span className="w-2 h-2 rounded-full bg-[#BAC29E]"></span>
                      <span>Others</span>
                    </div>
                    <span className="font-black text-[#1E2516]">10%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WEEKLY RUN RATE BAR CHART COMPONENT CONTAINER */}
            <div className="bg-white rounded-2xl border border-[#E5E9D5] p-6 lg:col-span-7 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-black text-[#1E2516] tracking-tight">Weekly Run Rate</h4>
                <span className="text-[10px] font-black text-[#2B8618]">Target: &lt;$10k</span>
              </div>

              <div className="grid grid-cols-4 items-end gap-4 h-28 mt-4 pt-4">
                <div className="space-y-2 text-center">
                  <div className="bg-[#E5F7E4] rounded-lg h-14 w-full"></div>
                  <p className="text-[9px] font-black uppercase text-[#BAC29E]">Week 1</p>
                </div>
                <div className="space-y-2 text-center">
                  <div className="bg-[#E5F7E4] rounded-lg h-20 w-full"></div>
                  <p className="text-[9px] font-black uppercase text-[#BAC29E]">Week 2</p>
                </div>
                <div className="space-y-2 text-center">
                  <div className="bg-[#E5F7E4] rounded-lg h-16 w-full"></div>
                  <p className="text-[9px] font-black uppercase text-[#BAC29E]">Week 3</p>
                </div>
                <div className="space-y-2 text-center">
                  <div className="bg-[#C1F161] rounded-lg h-24 w-full"></div>
                  <p className="text-[9px] font-black uppercase text-[#1E2516]">Current</p>
                </div>
              </div>
            </div>

          </section>

        </main>
      </div>
    </div>
  );
}


// --- TYPE-SAFE EXPLICIT PROPS ASSIGNMENTS FOR INLINE SVG ASSETS ---
type SVGProps = React.SVGProps<SVGSVGElement>;

const BellIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);
const SettingsIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.767c-.31.236-.456.63-.385 1.01.016.082.025.167.025.252 0 .085-.009.17-.025.252-.07.38-.05 1.15.385 1.386l1.002.767a1.125 1.125 0 0 1 .26 1.43l-1.297 2.247a1.125 1.125 0 0 1-1.37.491l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.767c.31-.236.456-.63.385-1.01a3.45 3.45 0 0 1-.026-.252c0-.085.009-.17.026-.252.07-.38.05-1.15-.385-1.386l-1.004-.767a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  </svg>
);
const PlusIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);
const CategoryGridIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72" />
  </svg>
);
const ContractIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
);
const DownloadIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);
const EyeIcon = (props: SVGProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);