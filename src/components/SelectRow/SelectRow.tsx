import { useState } from "react";

type SelectRowProps = {
  label: string;
  options?: string[];
};

const SelectRow = ({
  label,
  options = ["Wallet", "Bank", "Exchange"],
}: SelectRowProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="">
      <p className="flex mb-4 font-medium text-sm text-[#013941] ">
        {label}
      </p>

      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between border border-gray-200 rounded-full px-4 py-3 text-sm text-gray-700"
        >
          {value || "Select an option"}
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="#0F172A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-sm">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  setValue(opt);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50"
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectRow;
