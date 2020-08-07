import React, { useState } from 'react';
import './../main-pay/main-form-container.scss'
import { Link } from 'react-router-dom';




const MainSignUp = () => {

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");  
    const [checked, setChecked] = useState(false)
    const [checked1, setCheckedPrivat] = useState(false)
    const [checked2, setCheckedWallet] = useState(false)
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
                <div className="form__group__checked">
                    <input 
                    type="checkbox" 
                    className="form__checked" 
                    id="exampleCheck1"
                    onClick={(e)=> setCheckedPrivat(
                        !checked1
                        )}/>
                    <label 
                        className="label__checked" 
                        htmlFor="exampleCheck1">
                            I understand that a real username and password can be used to 
                            enter my cryptocurrency wallet: <Link to="/privacypolicy">PRIVACY POLICY</Link>
                        </label>
                </div>
                <div className="form__group__checked">
                    <input 
                    type="checkbox" 
                    className="form__checked" 
                    id="exampleCheck2"
                    onClick={(e)=> setCheckedWallet(
                        !checked2
                        )}/>
                    <label 
                        className="label__checked" 
                        htmlFor="exampleCheck2">
                            I agree to Bithoven's <Link to="/mywallet">MY WALLET</Link>
                        </label>
                </div>
                <div className="form__group__checked">
                    <input 
                    type="checkbox" 
                    className="form__checked" 
                    id="exampleCheck3"
                    onClick={(e)=> setChecked(
                        !checked
                        )}/>
                    <label
                        className="label__checked" 
                        htmlFor="exampleCheck3">
                            I agree to Bithoven's <Link to="/termsofuse">TERMS OF USE</Link> and <Link to="/privacypolicy">PRIVACY POLICY</Link>
                        </label>
                </div>
                <button 
                        type="submit" 
                        className="button-form"
                        disabled={password === "" || email === "" || checked === false || checked1 === false || checked2 === false}>Sign up</button>
            </form>       
    )

}

export {
    MainSignUp
}