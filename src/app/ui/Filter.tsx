interface handleFilter {
    (e:React.ChangeEvent<HTMLSelectElement>) : void
}

interface props {
    options: string[],
    category: string,
    handleFilter: handleFilter
}

const Filter = ({options, category, handleFilter}:props) => {
  return (
    <select className="rounded mr-3 text-black p-1" name={category} id={category} onChange={handleFilter} value={options[0]} >
        {options.map((option, key) => <option key={key} value={option}>{option}</option>)}
    </select>
  )
}

export default Filter