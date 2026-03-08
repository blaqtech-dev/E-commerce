

import Bot from '../assets/bot.png'
import UserImage from '../assets/userimage.png'
   import '../app.css'
  
  
  
 export  function ChatMessage({message,sender}){ 
    {
        return(
            <div className={sender=='user'?'chat-message-user':'chat-message-bot'}>
       {sender==='bot' && <img src={Bot} className='img-bot'/>}
        
        <div className='messageMe'>{message}</div>
        {sender ==='user' && <img src={UserImage} className='fa-user'/>}
            </div>  
        )
      }
    }
