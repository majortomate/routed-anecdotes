import {useParams} from 'react-router-dom'

function AnecdoteDetail({anecdotes}){


  const {id} = useParams();
  return(

    <div>{
      anecdotes.map(item => item.id === Number(id) ?
      <div key={item.id}>
        <h2>{item.content}</h2> 
        <p>For more info see: <a href={item.info}>{item.info}</a></p>
      </div> 
      : null)
      }

    </div>
   
  )
}

export default AnecdoteDetail
