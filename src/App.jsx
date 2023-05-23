import './App.css'
import InsertItens from './components/InsertItens/InsertItens'

function App() {

  return (
    <div className='container'>
      <h1 style={{padding: '0 10px', backgroundColor: 'lightgray', borderRadius: '5px'}}>Lista de Compras:</h1>
      <InsertItens />
    </div>
  )
}

export default App
