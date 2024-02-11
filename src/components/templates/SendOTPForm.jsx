import React from 'react'
import {sendOtp} from 'services/auth'

function SendOTPForm({mobile , setMobile , setStep}) {
    const submitHandler = async e => {
        e.preventDefault()
        if (mobile.length !== 11) return

        const {response , error} = await sendOtp(mobile)
        console.log(response , error);
        if (response) setStep(2)
        if (error) console.log(error.response.data.massage);

    }
  return (
    <form onSubmit={submitHandler}>
        <p>ورود به حساب کاربری</p>
        <span>برای استفاده از امکانات دیوار ، لطفا شماره موبایل خود را وارد کنید. کد تایید به شماره پیامک خواهد شد</span>
        <label htmlFor='input'>شماره موبایل خود را وارد کنید</label>
        <input type='text' id='input' placeholder='شماره موبایل' value={mobile} onChange={(e) => setMobile(e.target.value)} />
        <button type='submit'>ارسال کد تایید</button>
    </form>
  )
}

export default SendOTPForm