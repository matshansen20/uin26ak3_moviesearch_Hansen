export default function SearchBar({ onSearch }) {
  function handleChange(e) {
    const value = e.target.value

    if (value.length >= 3) {
      onSearch(value)
    }
  }

  return (
    <header>
      <label>
        Search movie
        <input type="text" onChange={handleChange} />
      </label>
    </header>
  )
}