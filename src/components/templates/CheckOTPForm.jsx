import React from 'react'
import {checkOtp} from 'services/auth';
import {setCookie} from 'utils/cookie';

function CheckOTPForm({code , setCode , setStep , mobile}) {
    const submitHandler = async e => {
        e.preventDefault()
        console.log(code , mobile);
        if (code.length !== 5 ) return
        
        const {response , error} = await checkOtp(mobile , code)
        if (response) {
            setCookie(response.data)
        } else console.log(error.response.data.message);
    }
  return (
    <form onSubmit={submitHandler}>
        <p>ورود به حساب کاربری ( تایید کد )</p>
        <span>کد پیامک شده به شماره {mobile}  وارد کنید.</span>
        <label htmlFor='input'>کد تایید را وارد کنید</label>
        <input type='text' id='input' placeholder='کد تایید' value={code} onChange={e => setCode(e.target.value)} />
        <button type='submit'>ورود</button>
        <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  )
}

export default CheckOTPForm