const Filter = () => {
  return (
    <div className="filter">
      <h2>Filtering</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incompleted">Incompleted</option>
          </select>
        </div>
        <div>
          <p>Alphabetical Order:</p>
          <button>Asc</button>
          <button>Desc</button>
        </div>
      </div>
    </div>
  )
}

export default Filter