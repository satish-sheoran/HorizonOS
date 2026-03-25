import { useSelector } from "react-redux"

const Categories = () => {
    const theme = useSelector((store) => store.wallpaper.theme)

    return (
        <div className="categories  flex gap-2">

            <button className={`text-md md:text-lg  px-3.5 py-2.5 `}>All</button>
            <button className={`text-md md:text-lg  px-3.5 py-2.5`}>Uncategorised</button>
        </div>
    )
}

export default Categories