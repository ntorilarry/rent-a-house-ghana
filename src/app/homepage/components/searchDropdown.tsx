'use client';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';
import { IconType } from 'react-icons';

interface SearchDropdownProps {
  icon?: IconType;
  label?: string;
  placeholder?: string;
  options: string[];
}

export default function SearchDropdown({ icon: Icon, label, placeholder, options }: SearchDropdownProps) {
  const [selected, setSelected] = useState<string | undefined>(placeholder != null ? undefined : options[0]);
  const displayValue = selected ?? placeholder ?? "Select";

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative flex-1">
        <ListboxButton className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium hover:border-teal-300 transition text-left group">
          {Icon && <Icon className="w-5 h-5 text-gray-500 shrink-0" />}
          <span className="flex-1 min-w-0">
            {label && <span className="text-xs text-gray-500 block mb-0.5">{label}</span>}
            <span className={`text-sm font-medium block truncate ${selected ? "text-teal-900" : "text-gray-400"}`}>
              {displayValue}
            </span>
          </span>
          <MdKeyboardArrowDown className="w-5 h-5 text-gray-500 shrink-0" />
        </ListboxButton>

        <ListboxOptions className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
          {options.map((option) => (
            <ListboxOption
              key={option}
              value={option}
              className={({ active }) =>
                `px-4 py-2 text-sm cursor-pointer transition ${
                  active ? 'bg-sky-100 text-teal-900' : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              {option}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
