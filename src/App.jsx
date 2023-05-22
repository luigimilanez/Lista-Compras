import './App.css'
import Titulo from './components/Titulo/Titulo'
import InsertItens from './components/InsertItens/InsertItens'

function App() {

  return (
    <div className='container'>
      <Titulo title={'Lista de Compras:'}/>
      <InsertItens />
    </div>
  )
}

export default App
