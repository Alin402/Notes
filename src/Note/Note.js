import React from  'react';
import './Note.css';

class Note extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            body: 'none'
        }
    }

    showBody = () => {
        if(this.state.body === 'none'){
            this.setState({body: 'block'});
        }
        else{
            this.setState({body: 'none'});
        }
    }
    render(){
        let display = this.state.body;
        return(
         <div id='NoteContainer'>
             <div style={{width: '100%', height: '20%'}} className='container'>
                 <div className='row'>
                     <div className='col-lg-6 col-md-6'>
                        <h2 style={{float: 'left'}}>{this.props.Title}</h2>
                    </div>
                    <div className='col-lg-2 col-md-6'>
                        <p style={{float: 'left', padding: '30px'}}>{this.props.Date}</p>
                    </div>
                    <div className='col-lg-2 col-md-6' style={{padding: '30px'}}>
                        <button onClick = {this.showBody} className='controlsBtn' style={{float: 'left'}}>View</button>
                    </div>
                    <div className='col-lg-2 col-md-6' style={{padding: '30px'}}>
                        <button className='controlsBtn' style={{float:'right'}}>Delete</button>
                    </div>
                </div>
             </div>

             <div style={{display: display, borderTop: '1px solid lightgrey', width: '90%', margin: '0 auto'}}>
                {this.props.Content}
             </div>
         </div>
        );
    }
}

export default Note;