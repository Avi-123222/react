function CountryListShimmer() {
  return (
    <div className="countries-container">
      {Array.from({ length: 20 }).map((el, index) => (
        <div key={index} className="country-card shimmer-card">
          <div className = "flag-container"></div>
          <div className="card-text"></div>
          <h3 className="card-title"></h3>
          <p></p>
          <p></p>
          <p></p>
        </div>
      ))}
    </div>
  );
}

export default CountryListShimmer;
