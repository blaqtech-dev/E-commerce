import { useState} from 'react'
import  { Chatbot} from 'supersimpledev'
 import '../app.css'



 export function ChatInput({chatMessages,setChatMessages}){

    const [inputText,setInputText]=useState('')

function TextDecoder(e){
setInputText(e.target.value)

}

function sendMessage(){

    const newChat=([
    ...chatMessages,
    {
message:inputText,
sender:'user',
id:crypto.randomUUID()
    }
  ])
  setChatMessages(newChat)

 const resBot= Chatbot.getResponse(inputText)
 
  setChatMessages([
    ...newChat,
    {
message:resBot,
sender:'bot',
id:crypto.randomUUID()
    }
  ])

 

 setInputText('')
}

    return (
 <div className='inputBtn-area'>
    <input placeholder='send a message  to  chatbot'
     onChange={TextDecoder} className='input' value={inputText}/>
    <button onClick={sendMessage} className='sendBtn'>send mesage</button>
            </div>
    )
       }

 


    

    