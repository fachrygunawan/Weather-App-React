const hourlyMockData = [
  { hour: "1 PM", temp: "20°", condition: "Cloudy" },
  { hour: "2 PM", temp: "21°", condition: "Rainy" },
  { hour: "3 PM", temp: "21°", condition: "Rainy" },
  { hour: "4 PM", temp: "20°", condition: "Cloudy" },
  { hour: "5 PM", temp: "21°", condition: "Rainy" },
  { hour: "6 PM", temp: "21°", condition: "Rainy" },
];

const HourlyForecast = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {hourlyMockData.map((item, index) => (
        <div
          key={index}
          className="p-3 rounded-lg border border-gray-200 text-center flex-1"
        >
          <p className="text-sm text-black font-semibold">{item.hour}</p>
          <p className="text-xl text-gray font-bold">{item.temp}</p>
          <p className="text-xs text-gray-200">{item.condition}</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;