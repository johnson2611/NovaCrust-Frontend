import CurrencyDropdown from "../../currencies/CurrenciesDropdown";
import ngn from "../../assets/icons/nig.png";

interface AmountCardProps {
  label: string;
  amount: string;
  onChange?: (value: string) => void;
  currency: string;
  disabledCurrency?: boolean;
}

const AmountCard = ({
  label,
  amount,
  onChange,
  currency,
  disabledCurrency = false,
}: AmountCardProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl px-5 py-4">

      <p className="flex mb-2 text-sm text-[#828282]">{label}</p>

      <div className="flex items-center justify-between">
        <input
          value={amount}
          onChange={(e) => onChange?.(e.target.value)}
          className="text-2xl font-semibold text-gray-900 outline-none bg-transparent w-1/2"
          placeholder="0.00"
        />

        {disabledCurrency ? (
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1 bg-gray-50 cursor-default">
            <img src={ngn} alt="NGN" className="w-5 h-5" />
            <span className="text-sm font-medium">NGN</span>
            <span className="text-xs text-gray-400">▾</span>
          </div>
        ) : (
          <CurrencyDropdown
            value={currency}
            onChange={(val) => console.log(val)}
          />
        )}
      </div>
    </div>
  );
};

export default AmountCard;
