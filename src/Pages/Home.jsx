import {Link, useLocation} from 'react-router-dom'

function Home(props) {
  const {state} = useLocation()
  const {anecdotes } = props

  return ( 
    <div>
      <div>
      <p>{state}</p>
      <h2>Anecdotes List</h2>
      <ul>
        {
        anecdotes.map(anecdote => <Link to={`anecdote/${anecdote.id}`}  key={anecdote.id}> <li>{anecdote.content}</li></Link>)
        }
      </ul>
      
    </div>
    </div>
   );
}

export default Home;
