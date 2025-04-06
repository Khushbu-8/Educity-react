import React from 'react'
import "./Contactus.css"
import msg_icon from '../../../public/msg-icon.png'
import email_icon from '../../../public/email-icon.png'
import phone_icon from '../../../public/phone-icon.png'
import addess_icon from '../../../public/address-icon.png'

const Contectus = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0da55f0a-89cd-4d1e-977a-ad7753b18c33");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset()
    }
  };
  return (
    <div className='contactus'>
        <div className="contact-left">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p className='contact-dc'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
      <ul>
        <li>
            <img src={email_icon} alt="" />
            <p>contact@university.com</p>
        </li>
        <li>
            <img src={phone_icon} alt="" />
            <p>+1 123-456-7890</p>
        </li>
        <li>
            <img src={addess_icon} alt="" />
            <p>77 Massachusetts Ave, Cambridge
            MA 02139, United States</p>
        </li>

      </ul>
        </div>
        <div className="contact-right">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name="name" placeholder="Enter your name" required=""/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your mobile number" required=""/>
                <label>Your Email</label>
                <input type="email" name="email" placeholder="Enter your email id" required=""/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder="Enter your message" required=""></textarea>
                         <button type="submit" class="btn dark-btn submit-btn">Submit now <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAYAAABnuu2GAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADPSURBVHgB7dnRDYJAEEXRpxVYAiXQgpVICVqB2IEdaAeUQAlrB9iBdjDOyPqhm2yCX7xhTzIJhITkBgJkAWZIRDY6vYw624cHGtLItzA1bo15+o2odTqwi7dikNQF7LzHVTrD0uKOYFfiWJU4VhpR6zyWFrez46u4cUb6GcOssbBBNyr48rSPYE9X6uMddtC5w5cTWGUeHnuwykS1YJV5QbdgVaJYlCgWmagrWMm4mOMyKriKMpKuBJsw5RwsK8E3nS3YxVuxi1eqlz9+SrwAYrdvIKJt0HIAAAAASUVORK5CYII=" alt=""/></button>
            
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contectus