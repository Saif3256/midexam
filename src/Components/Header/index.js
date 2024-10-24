
function Header() {
 

  return (
    <div>
      <div className={`search-bar ${isScrolled ? 'small' : ''}`}>
        <div className="search-bar-text">
          {isScrolled ? "Anywhere" : "Where"}
          <div className="search-bar-text2">
            {isScrolled ? "" : "Search Destinations"}
          </div>
        </div>

        <div className="search-bar-text">
          {isScrolled ? "Any week" : !isExperience ? "Check in" : "Date"}
          <div className="search-bar-text2">
            {isScrolled ? "Add Dates" : isExperience ? "Add Dates" : "Add dates"}
          </div>
        </div>

        {!isScrolled && !isExperience && (
          <div className="search-bar-text">
            Check out
            <div className="search-bar-text2">Add Dates</div>
          </div>
        )}

        <div className="search-bar-text">
          {isScrolled ? "Add guests" : "Who"}
          <div className="search-bar-text2">Add Guests</div>
        </div>

        <div className="search-icon-div">
          <SearchRoundedIcon className="search-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
