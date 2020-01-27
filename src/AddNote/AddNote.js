import React from 'react';
import './AddNote.css';

class AddNote extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    addNote = () => {
        fetch('http://localhost:3000/addnote', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: this.state.title,
            content: this.state.content,
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data === 'success'){
            alert('user added succesfully');
        }
        else{
            alert('you already registered you piece of shit');
        }
    })

    document.querySelector('#exampleInputEmail1').value = "";
    document.querySelector('#comment').value = "";
}

    setTitle = (e) => {
        this.setState({title: e.target.value});
    }

    setContent = (e) => {
        this.setState({content: e.target.value});
    }
    render(){
        return(
            <div className='AddNoteCont container' style={{display: this.props.isShown}}>
                <h2>Add Note</h2>
                
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Note Title</label>
                        <input onChange = {this.setTitle} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title" />
                        <small id="emailHelp" className="form-text text-muted">The Title must by maximum 15 characters</small>
                    </div>
                    <div className="form-group">
                    <label htmlFor="comment">Content</label>
                    <textarea onChange = {this.setContent} className="form-control" rows="5" id="comment"></textarea>
                        </div>
                    <button onClick = {this.addNote} type="submit" className="btn btn-primary">Submit</button>
            </div>
        );
    }
}

export default AddNote;