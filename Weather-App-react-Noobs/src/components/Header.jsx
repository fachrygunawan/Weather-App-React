import { getCurrentDate } from './TimeDisplay';

const Header = ({ location }) => {
  const currentDate = getCurrentDate();

  return (
    <div className="flex justify-between items-center mb-12">
      <h1 className="text-xl font-semibold text-black">{location}</h1>
      <p className="text-xl font-semibold text-black mx-auto">{currentDate}</p>
    </div>
  );
};

export default Header;