"use client";

import React, { useState, useRef, useEffect } from "react";

export interface DropdownOption {
  value: string;
  label: string;
  icon?: string;
}

interface CustomDropdownProps {
  options: (string | DropdownOption)[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  theme?: "gold" | "blue";
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  theme = "gold",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize options to object format
  const normalizedOptions: DropdownOption[] = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value) || normalizedOptions[0];

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isBlue = theme === "blue";

  const focusBorderClass = isBlue ? "border-blue-500 ring-2 ring-blue-500/20" : "border-[#b88c42] ring-2 ring-[#b88c42]/20";
  const activeIconColor = isBlue ? "text-blue-600" : "text-[#b88c42]";
  const selectedBgClass = isBlue ? "bg-blue-50 text-blue-700 font-semibold" : "bg-[#b88c42]/10 text-[#b88c42] font-semibold";

  return (
    <div ref={dropdownRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-xl border text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
          isOpen
            ? `bg-white shadow-md ${focusBorderClass}`
            : "border-stone-200 bg-stone-50/50 hover:bg-white hover:border-stone-300 shadow-xs"
        }`}
      >
        <div className="flex items-center gap-2.5 truncate">
          {selectedOption?.icon && (
            <span className={`material-symbols-outlined text-lg shrink-0 ${activeIconColor}`}>
              {selectedOption.icon}
            </span>
          )}
          <span className="text-sm font-medium text-stone-800 truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        <span
          className={`material-symbols-outlined text-stone-400 text-lg transition-transform duration-300 shrink-0 ml-2 ${
            isOpen ? `rotate-180 ${activeIconColor}` : ""
          }`}
        >
          expand_more
        </span>
      </button>

      {/* Floating Dropdown Options Menu */}
      {isOpen && (
        <div className="absolute z-50 mt-1.5 w-full bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 max-h-64 overflow-y-auto">
          <div className="p-1.5 space-y-0.5">
            {normalizedOptions.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm flex items-center justify-between transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? selectedBgClass
                      : "text-stone-700 hover:bg-stone-100/90 hover:text-stone-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    {option.icon && (
                      <span
                        className={`material-symbols-outlined text-base shrink-0 ${
                          isSelected ? activeIconColor : "text-stone-400"
                        }`}
                      >
                        {option.icon}
                      </span>
                    )}
                    <span className="truncate">{option.label}</span>
                  </div>

                  {isSelected && (
                    <span className={`material-symbols-outlined text-sm shrink-0 ml-2 ${activeIconColor}`}>
                      check
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
