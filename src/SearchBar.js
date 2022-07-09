const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search ToDO</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search ToDo"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;