type TabOption = {
  label: string;
  value: string;
};

type TabsProps = {
  options: TabOption[];
  active: string;
  onChange: (value: string) => void;
};

const Tabs = ({ options, active, onChange }: TabsProps) => {
  return (
    <div className="flex items-start">
      <div className="flex bg-gray-100 rounded-full p-1">
        {options.map((tab) => {
          const isActive = tab.value === active;

          return (
            <button
              key={tab.value}
              onClick={() => onChange(tab.value)}
              className={`px-4 py-2 text-xs rounded-full transition ${
                isActive
                  ? "bg-[#013941] text-white"
                  : "text-[#828282] hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
