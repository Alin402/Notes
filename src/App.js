import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import NotesContainer from './notes/NotesContainer';
import AddNote from './AddNote/AddNote';

class App extends React.Component {
  state = {
    isShown: 'none',
    notes: []
  }

  show = () => {
    if(this.state.isShown === 'none')
      this.setState({isShown: 'block'});
    else
      this.setState({isShown: 'none'})

  }

  render(){
        fetch('http://localhost:3000/getNotes')
    .then(response => response.json())
    .then(notes => {
        this.setState({notes: notes});
    });
    return (
      <div className="App">
          <Navbar/>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-3' id='addNoteCont'>
              <AddNote isShown = {this.state.isShown}/>
              </div>

              <div className='col-lg-6'>
                <NotesContainer notes={this.state.notes} show = {this.show}/>
              </div>

              <div className='col-lg-3'>
                
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
