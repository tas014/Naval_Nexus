interface props {
    switchTab: (e:React.MouseEvent<HTMLElement>) => void,
    tabName: string,
    selected: boolean
}

const Tab = ({switchTab, tabName, selected}:props) => {
  return (
    <li className={`pr-2 pl-2 pt-1 rounded-xl rounded-b-none font-bold text-slate-100 cursor-pointer ${selected ? "bg-slate-500" : "bg-slate-400"}`} onClick={switchTab}>{tabName}</li>
  )
}

export default Tab