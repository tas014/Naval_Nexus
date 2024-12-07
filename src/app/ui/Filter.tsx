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
    <select name={category} id={category} onChange={handleFilter} value={options[0]} >
        {options.map(option => <option value={option}>{option}</option>)}
    </select>
  )
}

export default Filter