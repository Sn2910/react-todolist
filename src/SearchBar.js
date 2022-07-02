const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-Search">
            <span className="visually"></span>
        </label>
        <input
            type="text"
            id="header-Search"
            placeholder="Search ToDo"
            name="s"
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar