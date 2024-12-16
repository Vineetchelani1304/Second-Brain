import { ReactElement } from "react"


const SidebarItem = ({text,icons}:{
    text: string,
    icons:ReactElement
}) => {
  return (
    <div className=" font-medium hover:text-slate-200 flex gap-2 cursor-pointer hover:bg-slate-800 p-2 hover:rounded-l-lg max-w-48 text-white text-lg justify-start ml-10 items-center">
      {icons}
      {text}
    </div>
  )
}

export default SidebarItem
