import {Link} from 'react-router-dom'

function Menu() {
  const padding = {
    paddingRight: 5
  }
  return (
    
    <div>
      <div>
        <h1>Software Anecdotes</h1>
        <Link to='/' style={padding}>Home</Link>
        <Link to='/create' style={padding}>Create New</Link>
        <Link to='/about' style={padding}>About</Link>
      </div>
    </div>
   );
}

export default Menu;
