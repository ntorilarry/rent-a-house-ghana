"use client";

import MainLayout from "@/shared/mainLayout";

const SectionHeader = () => (
  <div className="md:flex md:items-end md:justify-between">
    <div className="sm:max-w-md">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        New Items
      </h1>
      <p className="mt-4 text-base text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>

    <div>
      <button className="hidden md:inline-flex items-center px-4 py-2 text-sm font-bold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
        Sort Items
        <ChevronDown />
      </button>

      <button className="md:hidden inline-flex items-center justify-center w-full px-4 py-3 mt-6 text-sm font-bold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
        All Filters
        <ChevronDown />
      </button>
    </div>
  </div>
);

const ChevronDown = () => (
  <svg className="w-4 h-4 ml-2 -mr-1" viewBox="0 0 24 24" fill="none">
    <path
      d="M19 9l-7 7-7-7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckboxItem = ({ label }: { label: string }) => (
  <label className="flex items-start gap-3 cursor-pointer">
    <input
      type="checkbox"
      className="w-5 h-5 text-gray-900 border-gray-300 rounded-sm"
    />
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </label>
);

const FilterGroup = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => (
  <div className="py-6 space-y-4">
    <button className="flex items-center justify-between w-full text-base font-bold text-gray-900">
      {title}
      <ChevronDown />
    </button>
    {children}
  </div>
);

const FilterSidebar = () => {
  const categories = [
    "Admin Template",
    "SaaS UI Kit",
    "Landing UI Kit",
    "Blog UI Kit",
    "Ecommerce UI Kit",
  ];

  return (
    <aside className="hidden lg:block space-y-6">
      <button className="flex items-center gap-2 text-base font-bold text-gray-900">
        ✕ Reset All Filters
      </button>

      <hr className="border-gray-200" />

      <FilterGroup title="Category">
        <div className="space-y-4">
          {categories.map((item) => (
            <CheckboxItem key={item} label={item} />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Compatible With" />
      <FilterGroup title="Software Version" />
      <FilterGroup title="Price" />
      <FilterGroup title="Date Added" />
    </aside>
  );
};

/* -------------------- Main Page -------------------- */

const Properties = () => {
  return (
    <MainLayout>
      <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <SectionHeader />

          <div className="grid grid-cols-1 mt-6 md:mt-10 lg:grid-cols-4 gap-8">
            <FilterSidebar />

            <div className="lg:col-span-3">
              <div className="bg-white border-2 border-gray-200 border-dashed rounded-md h-96 lg:h-full" />
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Properties;
