const SearchIcon = ({ className, onClick = () => {} }) => {
  return (
    <span className={className} onClick={onClick}>
      <img
        src="/loupe.png"
        alt="Search"
        title="Search?"
        className="w-full h-full"
      />
    </span>
  );
};

export default SearchIcon;
