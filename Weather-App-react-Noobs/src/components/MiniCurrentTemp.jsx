const MiniCurrentTemp = ({currentTemperature, condition}) => {
  return (
    <div className="m-4">
        <div className="text-center">
            <span className="text-[48px] font-semibold leading-none text-gray">
            {currentTemperature}
            <span className="text-3xl align-top">°</span>
            </span>
        </div>

        <div className="flex justify-center items-center">
            <h2 className="text-2xl text-gray font-medium">{condition}</h2>
        </div>
    </div>
  );
}

export default MiniCurrentTemp;