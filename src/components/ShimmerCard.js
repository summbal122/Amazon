
const ShimmerCard = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
      {Array(10).fill("").map((_, index) => (
        <div
          key={index}
          className="rounded p-4 shadow transition bg-gray-light/50 animate-pulse space-y-3"
        >
          <div className="w-full h-48 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-6 bg-gray-300 rounded w-2/3 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerCard;
