
import React,{useState} from "react";
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import  {ChannelContainer, ChannelListContainer,Auth} from './components'; 
import './App.css';
import 'stream-chat-react/dist/css/index.css';
const cookies=new Cookies();
const apiKey='wavrrsdptqkv';
const authToken=cookies.get('token');
const client=StreamChat.getInstance(apiKey);

if(authToken){ 
   client.connectUser({
    
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarURL'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  },authToken);
} 



const customStyles = {
  '--primary-color': 'green',
  '--md-font': '1.2rem',
  '--xs-m': '1.2rem',
  '--xs-p': '1.2rem',
  '--bg-gradient-end': '#105555',
  '--bg-gradient-start': '#070a0d',
  '--black': '#ffffff',
  '--blue-alice': '#00193d',
  '--border': '#146788',
  '--button-background': '#ffffff',
  '--button-text': '#005fff',
  '--grey': '#999755',
  '--grey-gainsboro': '#152D56',
  '--grey-whisper': '#363636',
  '--modal-shadow': '#000000',
  '--overlay': '#770445',
  '--overlay-dark': '#ffffffcc',
  '--shadow-icon': '#00000080',
  '--targetedMessageBackground': '#302d22',
  '--transparent': 'transparent',
  '--white': '#072731',
  '--white-smoke': '#13151b',
  '--white-snow': '#070a0d',
};
function App() {
  const [createType,setCreateType]=useState('');
  const [isCreating, setIsCreating]=useState(false);
  const [isEditing, setIsEditing]=useState(false);
  if(!authToken) return <Auth/> 
  return (
    <div className='app__wrapper'>  
      <Chat client={client} customStyles={customStyles}  >
        <ChannelListContainer
           
           isCreating={isCreating}
           setIsCreating={setIsCreating}
           setIsEditing={setIsEditing}
           setCreateType={setCreateType}


        />
 
 

        <ChannelContainer
        isCreating={isCreating}
        setIsCreating={setIsCreating}
        setIsEditing={setIsEditing}
        isEditing={isEditing}
        createType={createType}
        
        
        />

       
      </Chat>
      
    </div>
  );
}

export default App;
