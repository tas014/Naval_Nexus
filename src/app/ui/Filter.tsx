interface handleFilter {
    (e:React.ChangeEvent<HTMLSelectElement>) : void
}

interface props {
    options: string[],
    category: string,
    handleFilter: handleFilter
}

const Filter = ({options, category, handleFilter}:props) => {
  const formattedCategory = category[0].toLocaleUpperCase() + category.slice(1, category.length);
  return (
    <div className="flex flex-col mr-2">
      <span>{formattedCategory}</span>
      <select className="rounded mr-3 text-black p-1" name={category} id={category} onChange={handleFilter} >
          <option value="">Any</option>
          {options.map((option, key) => <option key={key} value={option}>{option}</option>)}
      </select>
    </div>
  )
}

export default Filter