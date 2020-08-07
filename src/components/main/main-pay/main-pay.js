import React, { useState } from 'react';
import './main-form-container.scss'




const MainPay = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");  
    const [checked, setChecked] = useState(false)
    console.log(password)
    console.log(email)
    console.log(checked)

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
                        type="password" 
                        className="form__input" 
                        id="password" placeholder="Password" 
                        onChange={(e) => 
                            setPassword(
                                // ...this.state,
                                e.target.value.trim().toLowerCase()
                            )}/>
                    <label
                        htmlFor="password"
                        className="form__label">Password</label>
                </div>
                <div className="form__group">
                    <input 
                        type="number" 
                        className="form__input" 
                        id="amount" placeholder="Amount (EUR)"/>
                    <label
                        htmlFor="amount"
                        className="form__label">Amount (EUR)</label>
                </div>
                <div className="form__group">
                    <input 
                        type="number" 
                        className="form__input" 
                        id="buy" placeholder="Buy (BTC)"/>
                    <label
                        htmlFor="buy"
                        className="form__label">Buy (BTC)</label>
                </div>
                <div className="form__group__checked">
                    <input 
                    type="checkbox" 
                    className="form__checked" 
                    id="exampleCheck1"
                    onClick={(e)=> setChecked(
                        !checked
                        )}/>
                    <label className="label__checked" htmlFor="exampleCheck1">I agree that the funds i bought will be automatically transferred to the service</label>
                </div>
                <button 
                        type="submit" 
                        className="button-form"
                        disabled={password === "" || email === "" || checked === false }>Buy and transfer</button>
            </form>       
    )

}

export {
    MainPay
}