
import './App.css';

function clickme () {
  alert ('thank you for your help!')
}

function App() {
  return( <div className="container"> 
  
  <h3> hello  </h3>
  
  <div className = "jumbotron">
    
    <h1>
      To Do
    </h1>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Ratione aut fugiat a quo accusamus amet saepe enim voluptatem quasi, 
     facere molestiae ipsam porro similique repudiandae quibusdam maiores exercitationem error quia.

    </p>
  </div>
  
  <div>
    <button onClick ={clickme}> click me </button>
  </div>

  </div>);

}

export default App;


