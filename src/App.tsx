import Counter from './features/counter/Counter'
import Todos from './features/todos/Todos'

function App() {
  return (
    <div className='page'>
      <Counter/>
      <hr />
      <Todos/>
      <hr />
    </div>
  )
}

export default App