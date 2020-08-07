import React, { useState } from 'react';
import '../main-pay/main-form-container.scss'
import './contact-us.scss'




const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");  
    console.log(name)
    console.log(email)

    return (
            <form className="form">
                <div className="form__group">
                    <input 
                        type="email" 
                        className="form__input" 
                        id="email" placeholder="Email"
                        onChange={(e) => 
                            setEmail(
                                // ...this.state,
                                e.target.value.trim().toLowerCase()
                            )}/>
                    <label
                        htmlFor="email"
                        className="form__label">Email</label>
                </div>
                <div className="form__group">
                    <input 
                        type="name" 
                        className="form__input" 
                        id="password" placeholder="Name" 
                        onChange={(e) => 
                            setName(
                                // ...this.state,апиа
                                e.target.value.trim().toLowerCase()
                            )}/>
                    <label
                        htmlFor="password"
                        className="form__label">Password</label>
                </div>
                <div className="area">
                    <textarea 
                        type="text" 
                        className="form__input textarea"
                        id="message" placeholder="Message"
                        />
                    <label
                        htmlFor="message"
                        className="form__label-area">Message</label>
                </div>
                <button 
                        type="submit" 
                        className="button-form"
                        disabled={name === "" || email === ""}>Buy and transfer</button>
            </form>       
    )

}

export {
    ContactUs
}