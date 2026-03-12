// group named class is only written inside this file nor in any other file to write its css, it is just use so that before hovering button, the text remain hidden
const WindowControls = (windowKey) => {

    return (
        <div className="window-controls text-black">

            <button className='group window-control-btns bg-(--color-close)'>
                <span className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-(--transition-medium)">1</span>
            </button>

            <button className='group window-control-btns bg-(--color-minimize)'>
                <span className="opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">2</span>
            </button>

            <button className='group window-control-btns bg-(--color-maximize)'>
                <span className="opacity-0 transition-all group-hover:opacity-100 ease-in-out duration-(--transition-medium)">3</span>
            </button>
        </div>
    )
}

export default WindowControls