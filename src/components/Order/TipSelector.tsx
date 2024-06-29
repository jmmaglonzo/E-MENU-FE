"use client";

interface TipValue {
  value: number | null;
  label: string;
}

interface TipSelectorProp {
  selectedTip: number;
  setSelectedTip: Function;
}

const TipSelector = ({selectedTip,setSelectedTip}: TipSelectorProp) => {
  const tip: TipValue[] = [
    {
      value: null,
      label: "Not now",
    },
    {
      value: 5,
      label: "₱ 5.00",
    },
    {
      value: 20,
      label: "₱ 20.00",
    },
    {
      value: 40,
      label: "₱ 40.00",
    },
    {
      value: 60,
      label: "₱ 60.00",
    },
  ];
  return (
    <div className="flex justify-between">
      {tip.map((item) => (
        <button
          key={item.label}
          onClick={() => setSelectedTip(item.value)}
          className={`mt-2 rounded-sm px-2 py-1 text-sm font-medium md:text-base ${selectedTip === item.value ? "bg-primary text-white" : "text-gray-600"}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default TipSelector;
