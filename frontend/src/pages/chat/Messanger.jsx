import React, { Component } from 'react';
import Message from './Message';

class Messanger extends Component {
    state= {
        messages: [{id: '1', 'author': 'user' ,'content': 'what do dogs look like'}, 
                   {id: '2', 'author': 'watson' ,'content': 'shut up fool'}, 
                   {id: '3', 'author': 'user' ,'content': 'that\'s mean'}, 
                   {id: '4', 'author': 'watson' ,'content': 'didn\'t i say to shut up'}]
    }
  render() {
    return (
        <div className="Messanger">
            <ul>
            {this.state.messages.map(item => (
                <Message messageContent={item.content} messageAuthor={item.author} />
            ))}
            </ul>
        </div>
    );
  }
}

export default Messanger;
