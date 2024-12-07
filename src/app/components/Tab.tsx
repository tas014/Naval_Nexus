interface props {
    switchTab: (e:React.MouseEvent<HTMLElement>) => void,
    tabName: string
}

const Tab = ({switchTab, tabName}:props) => {
  return (
    <li onClick={switchTab}>{tabName}</li>
  )
}

export default Tab