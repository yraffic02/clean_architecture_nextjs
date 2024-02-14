import Image from "next/image"

export const Header = () =>{
    return (
        <header className="flex items-center p-6 bg-blue-950">
            <div className="flex items-center gap-5 bg-white p-2 rounded-md">
                <Image 
                    src='/carlogo.svg'
                    height={30}
                    width={30}
                    alt="car logo"
                />
                <h1 className="text-black font-bold">Carros</h1>
            </div>
        </header>
    )
}