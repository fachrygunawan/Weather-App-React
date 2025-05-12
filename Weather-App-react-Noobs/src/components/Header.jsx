const Header = ({ location, date }) => {
  return (
    <div className="flex justify-between items-center mb-12">
      <h1 className="text-xl font-medium text-gray-700">{location}</h1>
      <p className="text-xl font-bold text-gray-600 mx-auto">{date}</p>
    </div>
  );
};

export default Header;