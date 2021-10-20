import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_oref5uf', 'template_ph6vere', formRef.current, 'user_6aVk7ZOs1Q6QkVcZitNDL')
            .then((result) => {
                console.log(result.text);
                setDone(true)

            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="phone icon" className="c-icon" />
                            +212 6 23 45 67 98
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="email icon" className="c-icon" />
                            contact@mail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="address icon" className="c-icon" />
                            245 King Street, Touterie Victoria 8520 Australia
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="message" name="message"></textarea>
                        <button>Submit</button>
                        {done && "Your Message has been sent succesfully"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
