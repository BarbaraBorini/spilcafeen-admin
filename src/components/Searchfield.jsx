export default function Searchfield({handleInput,filter}) {
    return (
        <input
            type="search"
            placeholder="Type to search..."
            value={filter}
            onChange={handleInput}
        />
    )
}