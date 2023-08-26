// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import ImageCard2 from './ImageCard2';
import ImageCard3 from './ImageCard3';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import NavBar from './NavBar.js';




function App() {
  return (
    <div className="container">

  <NavBar/>
      <h1 className="text-center m-3">card</h1>
      <div className ="row">
      <div className='col-md-4'>
        <ImageCard2/>
      </div>
      <div className='col-md-4'>
        <ImageCard2/>
      </div>
      <div className='col-md-4'>
        <ImageCard2/>
      </div>
      <div className='col-md-4'>
        <ImageCard3 
        title="Nature"
        imgsrc="https://tse1.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQAAAA&pid=Api&P=0&h=180"
        desc="Nature description"

        />
      </div>
      <div className='col-md-4'>
        <ImageCard3 
        title="water"
        imgsrc="https://tse4.mm.bing.net/th?id=OIP.cKTq4enAGO_Wg_Omp0ysngHaEK&pid=Api&P=0&h=180"
        desc="river"

        />
      </div>
      

    </div>
    </div>
  );
}

export default App;