import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tabs from "../../Tabs/Tabs";
import AmountCard from "../../AmountCards/AmountCard";
import SelectRow from "../../SelectRow/SelectRow";
import Button from "../../Button/Button";
import PayFromSelect from "../../../wallets/PaySelect/paySelect";

const tabs = [
  { label: "Crypto to cash", value: "crypto-cash" },
  { label: "Cash to crypto", value: "cash-crypto" },
  { label: "Crypto to fiat loan", value: "crypto-fiat" },
];

const CheckoutForm = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("crypto-cash");
  const [payAmount, setPayAmount] = useState("1.00");
  const [receiveAmount, setReceiveAmount] = useState("1.00");
  const [payFrom, setPayFrom] = useState<string | null>(null);

  const isFormValid =
    !!payAmount &&
    !!receiveAmount &&
    !!payFrom;

  const handleSubmit = () => {
    if (!isFormValid) return;
    navigate("/checkout/review");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-5 space-y-5">
      <Tabs
        options={tabs}
        active={activeTab}
        onChange={setActiveTab}
      />

      <AmountCard
        label="You pay"
        amount={payAmount}
        onChange={setPayAmount}
        currency="ETH"
      />

      <AmountCard
        label="You receive"
        amount={receiveAmount}
        onChange={setReceiveAmount}
        currency="NGN"
        disabledCurrency
      />

      <div>
        <p className="mb-2 text-sm text-gray-500">Pay from</p>
        <PayFromSelect
          value={payFrom}
          onChange={setPayFrom}
        />
      </div>

      <SelectRow label="Pay to" />

      <Button
        disabled={!isFormValid}
        onClick={handleSubmit}
      >
        Convert now
      </Button>
    </div>
  );
};

export default CheckoutForm;
