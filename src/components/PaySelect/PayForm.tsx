import { useState } from "react";
import { wallets } from "../../wallets/wallets";

interface PayFromSelectProps {
  value?: string | null;
  onChange: (id: string) => void;
}

const PayFromSelect = ({ value, onChange }: PayFromSelectProps) => {
  const [open, setOpen] = useState(false);

  const selected = wallets.find((w) => w.id === value);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between border border-gray-200 rounded-xl px-4 py-3 bg-white"
      >
        {selected ? (
          <div className="flex items-center gap-3">
            <img src={selected.icon} alt={selected.name} className="w-5 h-5" />
            <span className="text-sm font-medium">{selected.name}</span>
          </div>
        ) : (
          <span className="text-sm text-gray-400">Select wallet</span>
        )}

        <span className="text-gray-400 text-sm">▾</span>
      </button>
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-sm">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              type="button"
              onClick={() => {
                onChange(wallet.id);
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-left"
            >
              <img src={wallet.icon} alt={wallet.name} className="w-5 h-5" />
              <div>
                <p className="text-sm font-medium">{wallet.name}</p>
                {wallet.description && (
                  <p className="text-xs text-gray-400">
                    {wallet.description}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PayFromSelect;
