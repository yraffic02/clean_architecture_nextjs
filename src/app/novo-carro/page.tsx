export default function NewCar(){
    return(
        <div className="flex flex-col justify-center items-center p-4">
            <h1>novo carro</h1>
            <form className="flex flex-col justify-start w-2/6 p-7 gap-4">
                <input 
                    placeholder="Marca"
                />
                <input 
                    placeholder="Modelo"
                />
                <input 
                    placeholder="Ano"
                />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
} 