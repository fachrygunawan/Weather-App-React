const Greetings = ({ GreatNow }) => {
  const getGreeting = () => {
    const hour = GreatNow.getHours();
    if (hour >= 5 && hour < 12) return 'Good Morning';
    if (hour >= 12 && hour < 18) return 'Good Afternoon';
    if (hour >= 18 && hour < 22) return 'Good Evening';
    return 'Good Night';
  };

  return <h2 className="text-xl font-semibold text-gray-800 mb-2">{getGreeting()}</h2>;
};

export default Greetings;