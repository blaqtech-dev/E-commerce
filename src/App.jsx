import { useState } from 'react'
import {ChatInput} from './components/chatinput'

import { ChatMessages } from './components/chatmessages'
import './App.css'






   








 function App(){
   const [chatMessages,setChatMessages]= useState(
 [
      
    ])


 

   return(
  <div className='chatapp-container'>

     <ChatMessages
      chatMessages={chatMessages}
      setChatMessages={setChatMessages}
      />

    <ChatInput
    chatMessages={chatMessages}
    setChatMessages={setChatMessages}
    />
     
              </div>
        )
    }

export default App
