import React,{useState}from 'react'
import './Contact.css'

function Contact({ id }) {
   const [name, setName] = useState('');
   const [subject, setSubject] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');

   const handleClick = (e) => {
      e.preventDefault();
     window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
   }

    return (
      <section id={id}>
        <div className="double-row">
           <h1 className="title">Contact Me</h1>
               <form>
					<fieldset>
                  <div className="row-me">
						   <label> Name <span className="required">*</span></label>
						   <input value={name} type="text" required='true' onChange={e => setName(e.target.value)}/>
                  </div>
                  <div className="row-me">
						   <label> Email <span className="required">*</span></label>
						   <input value={email} type="text" onChange={e=> setEmail(e.target.value)}/>
                  </div>
                  <div className="row-me">
						   <label> Subject</label>
						   <input value={subject} type="text" onChange={e => setSubject(e.target.value)}/>
                  </div>
                  <div className="row-me">
                     <label> Message <span className="required">*</span></label>
                     <textarea value={message} onChange={e => setMessage(e.target.value)} cols="50" rows="15"/>
                  </div>
                  <div>
                     <button type='submit' onClick={handleClick} className="submit">Submit</button>
                  </div>
					</fieldset>
				   </form>
           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
      </div>
   </section>
    );
  }
  
  export default Contact;