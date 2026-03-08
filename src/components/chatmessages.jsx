 import {useEffect,useRef} from 'react'
 import {ChatMessage} from './chatmessage'
 import '../app.css'
 
 export function ChatMessages({chatMessages}){

        const chatRefContainer=useRef(null)
 
  useEffect(()=>{
     const containerScroll=chatRefContainer.current

     if(containerScroll){
        containerScroll.scrollTop=containerScroll.scrollHeight
     }
    },[chatMessages])

    return(
         <div className='messages-container' ref={chatRefContainer}>
     
        { chatMessages.map((chatmessage)=>{
    const {message,sender,id}=chatmessage
return(
  <ChatMessage message={message} 
  sender={sender}
  key={id}
  />

)
    })}

        </div>
)
   }


