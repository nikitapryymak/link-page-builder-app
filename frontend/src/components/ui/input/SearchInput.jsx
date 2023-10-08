import SearchIcon from "../../../icons/SearchIcon";

const SearchInput = (props) => (
  <>
    <label
      htmlFor="search-input"
      className="mb-2 text-sm font-medium text-gray-900 sr-only"
    >
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
      </div>
      <input
        type="search"
        id="search-input"
        className="block w-full p-3 pl-10 text-sm text-gray-900 rounded-lg bg-gray-100 outline-none"
        placeholder="Search Icons"
        {...props}
      />
    </div>
  </>
);

export default SearchInput;
