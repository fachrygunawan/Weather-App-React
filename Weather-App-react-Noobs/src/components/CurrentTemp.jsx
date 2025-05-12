const CurrentTemp = ({currentTemperature, windSpeed, humidity, condition}) => {
  return (
    <div className="mb-16">
        <div className="text-center mb-4">
            <span className="text-[180px] font-bold leading-none text-gray-600">
            {currentTemperature}
            <span className="text-6xl align-top">°</span>
            </span>
        </div>

        <div className="flex justify-center items-center mb-4">
            <h2 className="text-4xl text-gray-600 font-medium">{condition}</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 -5 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-fog-icon lucide-cloud-fog"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 17H7"/><path d="M17 21H9"/></svg>
        </div>
        
        <div className="flex justify-center space-x-8">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind-icon lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>
                <span className="text-gray-600">{windSpeed} mph</span>
            </div>

            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-droplets-icon lucide-droplets"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/></svg>
                <span className="text-gray-600">{humidity}%</span>
            </div>
            
        </div>
    </div>
  );
}

export default CurrentTemp;