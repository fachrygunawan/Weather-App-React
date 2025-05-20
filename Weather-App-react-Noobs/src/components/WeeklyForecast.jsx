import { locationData } from '../data/LocationData';

const WeeklyForecast = () => {
  return (
    <div className="grid grid-cols-6 gap-2">
    {['Today', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
        <div
        key={index}
        className={`bg-gray-50 rounded-xl p-4 flex flex-col items-center transition-all duration-300 hover:shadow-md ${
            day === 'Today' ? 'border-2 border-gray-300' : ''
        }`}
        >
        <p className="text-sm text-gray-700 mb-2 font-bold">{day}</p>
        <p className="text-xl font-bold text-gray-700">20°</p>
        <p className="text-xs text-gray-500 mt-2">Mist</p>
        </div>
    ))}
    </div>
  );
}
export default WeeklyForecast;