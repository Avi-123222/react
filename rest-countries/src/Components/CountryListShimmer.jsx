function CountryListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="country-card shimmer-card"></div>
      ))}
    </div>
  );
}

export default CountryListShimmer;
