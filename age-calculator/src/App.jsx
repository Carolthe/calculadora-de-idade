import './App.css'
import Input from './components/Input'
import Seta from './Imagens/Seta.png'
import Paragrafo from './Paragrafo'

function App() {

  return (

    <div className='bg-white h-[480px] w-11/12 mx-4 mt-24 p-10 rounded-t-3xl rounded-bl-3xl rounded-br-[110px] '>
   <div className='flex justify-center gap-3'>
    <Input data="DAY"/>
    <Input data="MONTH"/>
    <Input data="YEAR"/>
    
   </div>
   <div className='grid justify-center mt-8'>
    
    <hr className=''></hr>
   <img className='w-14 h-14 bg-violet-600 rounded-full ml-24 mb-3' src={Seta} />
   <Paragrafo age="32" idade="years" />
   <Paragrafo age="3" idade="months" />
   <Paragrafo age="26" idade="days"/>
  </div> 
  </div>
  )
}

export default App