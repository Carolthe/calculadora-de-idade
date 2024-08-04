export default function Input (){
    return(
        <div className="grid justify-center">
            <label className="mr-16 text-sm mb-1 font-semibold text-slate-500">DAY</label>
            <input 
            type="number"
            placeholder="5"
            className=" text-2xl text-center font-semibold h-14 w-24 rounded-md border-solid border-2 border-gray-300"></input>
        </div>
    )
}