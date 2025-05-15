import { useState } from 'react';
import Header from './Header';
import CurrentTemp from './CurrentTemp';
import MiniCurrentTemp from './MiniCurrentTemp';
import CurrentTime from './TimeDisplay';
import Greetings from './Greetings';
import HourlyForecast from './HourlyForecast';
import { locationData } from '../data/LocationData';

const Dashboard = () => {
  const { location, date, currentTemperature, windSpeed, humidity, condition } = locationData;
  const [currentTime] = useState(new Date());

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-lg w-full max-w-5xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="md:w-8/6 p-8">
            {/* Header */}
            <Header location={location} date={date} />
            {/* Current Temperature */}
            <CurrentTemp
              currentTemperature={currentTemperature}
              windSpeed={windSpeed}
              humidity={humidity}
              condition={condition}
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[1px] bg-gray-300"></div>

          {/* Right Section */}
          <div className="md:w-5/12 bg-white-200 p-8">
            <div className="flex flex-col items-center justify-center flex-1">
              {/* Auto greeting */}
              <Greetings GreatNow={currentTime} />
              {/* Showed real-time clock */}
              <CurrentTime />
              {/* Current Temperature */}
              <MiniCurrentTemp 
                currentTemperature={currentTemperature}
                condition={condition}
              />
              {/* Hourly Forecast */}
              <p className="p-3 text-black font-semibold text-center">
                Hourly Forecast
              </p>
              <HourlyForecast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
