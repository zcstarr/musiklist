export function Menu() {

}

export function Navbar() {

    return (<div className="flex bg-green-400 w-full h-10 navbar">
        <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row items-center">
            <div className="p-5">Logo</div>
        </div>
        <div className="flex flex-row justify-between items-center">
            <div className="p-5">Wallet</div>
            <div className="p-5 cursor-pointer">Menu</div>
        </div>
        </div>
    </div>)

}