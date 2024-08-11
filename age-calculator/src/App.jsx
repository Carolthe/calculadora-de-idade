import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Seta from './Imagens/Seta.png'
import Paragrafo from './Paragrafo'

function App() {

  const [years, setYears] = useState("0")
  const [month, setMonth] = useState("0")
  const [day, setDay] = useState("0")

  function calcularIdade(years, month, day) {
    const hoje = new Date();
    const nascimento = new Date(years, month, day);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }

  return (
    <div className= 'items-center bg-white h-[480px] w-11/12  sm:my-[150px] sm:w-[650px]  mx-4 mt-24 p-10 rounded-t-3xl rounded-bl-3xl rounded-br-[110px] justify-center grid '>
   <div className='flex gap-3'>
    <Input data="DAY"
    value={day}
    onChange={(ev)=> setDay(ev.target.value)}/>
    <Input data="MONTH"
    value={month}
    onChange={(ev)=> setMonth(ev.target.value) }
      />
    <Input data="YEAR"
    value={years} 
   onChange={(ev)=> setYears(ev.target.value)}
    />
    
   </div>
   <div className='grid justify-center mt-8'>
    
    <hr className=''></hr>
    <button
    onClick={calcularIdade} className='w-14 h-14 bg-violet-800 rounded-full ml-24 mb-3'>
   <img className='' src={Seta} /> 
   </button>
   <Paragrafo age={years} idade="years"  />
   <Paragrafo age={month} idade="months" />
   <Paragrafo age={day} idade="days"

   />
  </div> 
  </div>
  )
}

export default App