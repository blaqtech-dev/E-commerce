
import '../css/contact.css'
import { Link } from 'react-router'

export function ContactMe(){
return(
    <div className='coverall-contact'>
       
     <div style={{ width: "100%", height: "300px" }}>
      <iframe
        title="Permanent Site Map"
        src="https://www.google.com/maps?q=Permanent%20Site,%20Akungba%20Akoko,%20Ondo%20State,%20Nigeria&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
     <div className='cover-infocontact'>
        <h2>send us your review</h2>
       
<form action="https://formspree.io/f/xlgpajee" method="POST">
 <div className='review-contact'>
    <p>
<input type="email" name="email" placeholder='your email'/>
    </p>
     <p>
          <textarea name="message" placeholder='send us your review'></textarea>
    </p>
     <p>
          <button type="submit">Send</button>
    </p>



        </div>
 
</form>
     </div>

     <div className='contact-links '>
        <div className='contact-about'>
<h1>about us</h1>
<p>permanent site,akungba akoko</p>
<p>ondo state,nigeria</p>
<p><a href="tel:+2347063367214">Call Us: 07063367214</a></p>
<p><a href="mailto:abiolaboluwatife@gmail.com">abiolaboluwatife28@gmail.com</a></p>
        </div>
          <div className='quick-links'>
<h1>quick links</h1>
<Link to='/product'>
<p>product  page</p>
</Link>
<Link to='/checkout'>
<p>checkout page</p>
</Link>
<Link to='/orders'>
<p>orders page</p>
</Link>
        </div>
          <div className='category-product'>
<h1>category products</h1>
<p>for men</p>
<p>kitchen utensils</p>
<p>for women</p>
<p>shoes</p>
<p>accessories</p>
        </div>
     </div>
    </div>
)
}