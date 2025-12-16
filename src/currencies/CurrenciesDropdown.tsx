import { useState } from "react";
import { currencies } from "./currencies";

type CurrencyDropdownProps = {
  value: string;
  onChange: (value: string) => void;
};

const CurrencyDropdown = ({ value, onChange }: CurrencyDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selected = currencies.find(c => c.code === value);

  const filtered = currencies.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 text-sm font-medium"
      >
        {selected && (
          <img
            src={selected.icon}
            alt={selected.code}
            className="w-4 h-4"
          />
        )}
        {value}
        <span className="text-xs">▾</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-20">
          <div className="p-3 border-b">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none"
            />
          </div>


          <div className="max-h-60 overflow-y-auto">
            {filtered.map((currency) => (
              <button
                key={currency.code}
                onClick={() => {
                  onChange(currency.code);
                  setOpen(false);
                  setSearch("");
                }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-50"
              >
                <img
                  src={currency.icon}
                  alt={currency.code}
                  className="w-5 h-5"
                />
                {currency.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
