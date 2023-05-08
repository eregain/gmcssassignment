import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
	 var pos = 0; 
	//our box element
	var box = document.getElementById('img');
	var t = setInterval(move, 10);
  
	function move() {
		if(pos >= 150) {
			clearInterval(t);
		}
		else {
			pos += 1;
			box.style.left = pos+'px';
		}
	}
    </header>
    </div>
  );
};
}

export default App;
