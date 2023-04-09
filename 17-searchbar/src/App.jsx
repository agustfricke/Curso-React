import { useState } from "react";
import { names, filterItems } from "./data";

function App() {

  const [query, setQuery] = useState("");
  const results = filterItems(names, query);

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />
      <List items={results} />
    </>
  );
}

export default App

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(name => (
          <tr key={name.id}>
            <td>{name.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function SearchBar({ query, setQuery }) {
  return (
    <>
      <input value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Search..."
      />
    </>
  )
}