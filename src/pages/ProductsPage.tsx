import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

// --- TS Type Definitions ---
interface ProductItem {
  sku: string;
  name: string;
  description: string;
  image: string;
  category: string;
  brand: string;
  stock: number;
  price: number;
  status: 'ACTIVE' | 'LOW STOCK' | 'INACTIVE';
}

interface SummaryCardProps {
  title: string;
  value: string | number;
  iconBg: string;
  icon: React.ReactNode;
}

export default function ProductCatalog() {
  // Mock Data matching the UI
  const [products] = useState<ProductItem[]>([
    {
      sku: 'NK-WFL-DBT',
      name: 'Nike Waffle Debut',
      description: 'Modern retro runner',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&auto=format&fit=crop&q=60',
      category: 'Footwear',
      brand: 'Nike',
      stock: 218,
      price: 80.00,
      status: 'ACTIVE',
    },
    {
      sku: 'NK-TCH-WVN',
      name: 'Nike Tech Jacket',
      description: 'Stretchy tech-fleece',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&auto=format&fit=crop&q=60',
      category: 'Apparel',
      brand: 'Nike',
      stock: 12,
      price: 130.83,
      status: 'LOW STOCK',
    },
    {
      sku: 'NK-V2K-RUN',
      name: 'Nike V2K Run New',
      description: 'Y2K aesthetic runner',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100&auto=format&fit=crop&q=60',
      category: 'Footwear',
      brand: 'Nike',
      stock: 123,
      price: 110.00,
      status: 'ACTIVE',
    },
    {
      sku: 'AD-ULTR-22',
      name: 'Ultraboost 22',
      description: 'Archived season stock',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=100&auto=format&fit=crop&q=60',
      category: 'Footwear',
      brand: 'Adidas',
      stock: 0,
      price: 180.00,
      status: 'INACTIVE',
    },
    {
      sku: 'NK-CRG-PNT',
      name: 'Fleece Cargo Pants',
      description: 'Brushed fleece joggers',
      image: 'https://images.unsplash.com/photo-1517438322307-e67111335449?w=100&auto=format&fit=crop&q=60',
      category: 'Apparel',
      brand: 'Nike',
      stock: 192,
      price: 65.42,
      status: 'ACTIVE',
    }
  ]);

  return (
    <div className="flex-1 pl-20 bg-[#F7F9EE] font-sans text-[#2D311B] min-h-screen">
      <Sidebar/>
        
      {/* TOP HEADER NAVIGATION BAR */}
      <header className="flex h-20 items-center justify-between border-b border-[#E5E9D5] bg-[#F7F9EE]/80 backdrop-blur-md px-8 sticky top-0 z-10">
        <div className="flex items-center gap-6 flex-1">
          <h1 className="text-xl font-bold tracking-tight text-[#1E2516]">SuperPOS Admin</h1>
          
          {/* Search Inputs */}
          <div className="relative w-full max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#7C8465]">
              <SearchIcon />
            </span>
            <input
              type="text"
              placeholder="Search by name, SKU..."
              className="w-full rounded-full border border-[#E1E6CE] bg-[#EEF2DF] py-2.5 pl-11 pr-4 text-sm font-medium text-[#2D311B] placeholder-[#7C8465] outline-none transition-all focus:border-[#4D6636] focus:bg-white"
            />
          </div>
        </div>

        {/* User Workspace Profile Widget */}
        <div className="flex items-center gap-4">
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

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-[#1E2516]">James Wilson</p>
              <p className="text-[10px] font-bold tracking-wider text-[#7C8465] uppercase">Store Manager</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
              alt="Manager Profile"
              className="h-10 w-10 rounded-full object-cover border border-[#E1E6CE]"
            />
          </div>
        </div>
      </header>

      {/* DASHBOARD CONTAINER BODY */}
      <main className="p-8 max-w-[1600px] mx-auto space-y-6">
        
        {/* Breadcrumb Path Links */}
        <nav className="text-xs font-semibold tracking-wide text-[#7C8465] flex items-center gap-1.5">
          <span>Inventory</span>
          <span>&gt;</span>
          <span className="text-[#4D6636]">Products</span>
        </nav>

        {/* Action Title Row */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight text-[#1E2516]">Product Catalog</h2>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-xl bg-[#E1E6CE] px-4 py-3 text-sm font-bold text-[#4D5335] hover:bg-[#D5DBC0] transition-colors">
              <ImportIcon />
              Import
            </button>
            <button className="flex items-center gap-2 rounded-xl bg-[#4D6636] px-5 py-3 text-sm font-bold text-white hover:bg-[#3E522B] transition-all shadow-md shadow-[#4D6636]/10">
              <PlusIcon />
              Add Product
            </button>
          </div>
        </div>

        {/* Filters Top Bar Segment */}
        <div className="rounded-2xl border border-[#E5E9D5] bg-[#EAEEDC]/40 p-4 flex items-center justify-between text-xs font-bold text-[#4D5335]">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-[#E1E6CE] bg-white px-4 py-2.5 flex items-center gap-2 shadow-sm">
              <span className="text-[#7C8465]">Status:</span>
              <span className="text-[#4D6636]">All Status</span>
            </div>
            <div className="rounded-xl border border-[#E1E6CE] bg-white px-4 py-2.5 flex items-center gap-2 shadow-sm">
              <span className="text-[#7C8465]">Category:</span>
              <span className="text-[#4D6636]">All Categories</span>
            </div>
          </div>
          <div className="text-[#7C8465] font-medium">
            Showing 1-10 of 128 products
          </div>
        </div>

        {/* DATA TABLE WRAPPER CONTAINER */}
        <div className="overflow-hidden rounded-2xl border border-[#E5E9D5] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#E5E9D5] bg-[#F9FBF3] text-[11px] font-extrabold tracking-wider text-[#7C8465] uppercase">
                  <th className="px-6 py-4">SKU</th>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Brand</th>
                  <th className="px-6 py-4">Stock</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right pr-8">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F3E6] text-[#2D311B] font-medium">
                {products.map((item) => (
                  <tr key={item.sku} className="hover:bg-[#F9FBF3]/60 transition-colors">
                    {/* SKU Label Badge */}
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className="rounded-lg bg-[#F0F3E6] px-2.5 py-1.5 text-xs font-bold text-[#5B6341] tracking-wide">
                        {item.sku}
                      </span>
                    </td>
                    {/* Product Name Details */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-10 w-10 rounded-xl bg-gray-100 object-cover border border-[#E5E9D5]"
                        />
                        <div>
                          <p className="font-bold text-[#1E2516]">{item.name}</p>
                          <p className="text-xs text-[#7C8465] font-normal mt-0.5">{item.description}</p>
                        </div>
                      </div>
                    </td>
                    {/* Categories and Brand Text Cells */}
                    <td className="whitespace-nowrap px-6 py-4 text-[#4D5335]">{item.category}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-[#4D5335]">{item.brand}</td>
                    {/* Stock Alert Mapping Logic */}
                    <td className={`whitespace-nowrap px-6 py-4 font-bold ${
                      item.status === 'LOW STOCK' ? 'text-[#FF5C5C]' : item.status === 'INACTIVE' ? 'text-[#BAC29E]' : 'text-[#40AA22]'
                    }`}>
                      {item.stock}
                    </td>
                    {/* Price Tag Value Representation */}
                    <td className="whitespace-nowrap px-6 py-4 font-bold text-[#1E2516]">
                      ${item.price.toFixed(2)}
                    </td>
                    {/* Dynamic Status Badges Mapping */}
                    <td className="whitespace-nowrap px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wide uppercase ${
                        item.status === 'ACTIVE' ? 'bg-[#E5F7E4] text-[#2B8618]' :
                        item.status === 'LOW STOCK' ? 'bg-[#FFEAEA] text-[#FF5C5C]' : 'bg-[#EAEEDC] text-[#7C8465]'
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          item.status === 'ACTIVE' ? 'bg-[#40AA22]' :
                          item.status === 'LOW STOCK' ? 'bg-[#FF5C5C]' : 'bg-[#7C8465]'
                        }`}></span>
                        {item.status}
                      </span>
                    </td>
                    {/* Table Row Action Icons Trigger */}
                    <td className="whitespace-nowrap px-6 py-4 text-right pr-8">
                      <div className="flex justify-end gap-3 text-[#7C8465]">
                        <button className="hover:text-[#4D6636] transition-colors">
                          <EditIcon />
                        </button>
                        <button className="hover:text-[#FF5C5C] transition-colors">
                          <TrashIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLE INTERACTION: PAGINATION GRID CONTROL COMPONENT */}
          <div className="border-t border-[#E5E9D5] bg-[#F9FBF3] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <button disabled className="p-1.5 rounded-lg border border-[#E1E6CE] bg-white text-[#BAC29E] cursor-not-allowed"><ChevronDoubleLeftIcon /></button>
              <button disabled className="p-1.5 rounded-lg border border-[#E1E6CE] bg-white text-[#BAC29E] cursor-not-allowed"><ChevronLeftIcon /></button>
            </div>
            
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#4D5335]">
              <button className="h-8 w-8 rounded-lg bg-[#4D6636] text-white">1</button>
              <button className="h-8 w-8 rounded-lg border border-[#E1E6CE] bg-white hover:bg-gray-50 transition-colors">2</button>
              <button className="h-8 w-8 rounded-lg border border-[#E1E6CE] bg-white hover:bg-gray-50 transition-colors">3</button>
              <span className="text-[#BAC29E] px-1">...</span>
              <button className="h-8 w-8 rounded-lg border border-[#E1E6CE] bg-white hover:bg-gray-50 transition-colors">13</button>
            </div>

            <div className="flex items-center gap-1.5">
              <button className="p-1.5 rounded-lg border border-[#E1E6CE] bg-white text-[#4D5335] hover:bg-gray-50"><ChevronRightIcon /></button>
              <button className="p-1.5 rounded-lg border border-[#E1E6CE] bg-white text-[#4D5335] hover:bg-gray-50"><ChevronDoubleRightIcon /></button>
            </div>
          </div>
        </div>

        {/* BOTTOM METRIC AGGREGATION BLOCKS SUMMARY GRID */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <SummaryCard 
            title="Total Products" 
            value="1,284" 
            iconBg="bg-[#EAEEDC]" 
            icon={<BoxIcon />} 
          />
          <SummaryCard 
            title="Low Stock Items" 
            value="24" 
            iconBg="bg-[#FFEAEA]" 
            icon={<AlertTriangleIcon />} 
          />
          <SummaryCard 
            title="Inventory Value" 
            value="$42,904.50" 
            iconBg="bg-[#EAEEDC]" 
            icon={<TrendingUpIcon />} 
          />
        </section>

      </main>
    </div>
  );
}

// --- EXTRACTED MODULE INTERFACE HELPERS ---
function SummaryCard({ title, value, iconBg, icon }: SummaryCardProps) {
  return (
    <div className="rounded-2xl border border-[#E5E9D5] bg-white p-5 flex items-center gap-4 shadow-sm">
      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconBg}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-[#7C8465]">{title}</p>
        <p className="text-xl font-extrabold text-[#1E2516] mt-0.5">{value}</p>
      </div>
    </div>
  );
}

// --- TYPE-SAFE INLINE SVG COMPONENT LIBRARY ---
type IconProps = React.SVGProps<SVGSVGElement>;

const SearchIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" />
  </svg>
);
const BellIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
  </svg>
);
const SettingsIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.767c-.31.236-.456.63-.385 1.01.016.082.025.167.025.252 0 .085-.009.17-.025.252-.07.38-.05 1.15.385 1.386l1.002.767a1.125 1.125 0 0 1 .26 1.43l-1.297 2.247a1.125 1.125 0 0 1-1.37.491l-1.216-.456c-.356-.133-.751-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.767c.31-.236.456-.63.385-1.01a3.45 3.45 0 0 1-.026-.252c0-.085.009-.17.026-.252.07-.38.05-1.15-.385-1.386l-1.004-.767a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  </svg>
);
const HelpIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
  </svg>
);
const ImportIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5A2.25 2.25 0 0 0 6.75 19.5h10.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3-3m0 0-3-3m3 3H9m1.5-12h3" />
  </svg>
);
const PlusIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);
const EditIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
  </svg>
);
const TrashIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);
const ChevronLeftIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);
const ChevronRightIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);
const ChevronDoubleLeftIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
  </svg>
);
const ChevronDoubleRightIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
  </svg>
);
const BoxIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#4D6636]" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
  </svg>
);
const AlertTriangleIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#FF5C5C]" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);
const TrendingUpIcon = (props: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#4D6636]" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);