import React from 'react'
import '../Component/Style/Contact.css'
import { TbPhoneCall } from 'react-icons/tb';
import { GoMail } from 'react-icons/go';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("The name field is required.").min(2, "Please enter a name more than 2 character"),
  text: yup.string().required("The Message field is required."),
  email: yup.string().required("The email field is required.").email("The email must be a valid email address."),
}).required();

const Contact = () => {

  const { register, handleSubmit,formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className='Contact' id="contact">
      <div className='Contact-container'>
        <div className='contact-heading'>
          <h1>Send Me A Message</h1> 
          <p>Your email address will not be published. All fields are required</p>
        </div>
        <form onSubmit={handleSubmit(d => console.log(d))}>
          <div className='flex-name-email'>
            <div className='name-contact'>
              <label htmlFor="">Name*</label> <br />
              <input type="text" placeholder="Your Name" name='name' {...register("name")}/>
              {errors.name && <p className='error-text' >{errors.name.message}</p>}
            </div>
            <div className='email-contact'>
            <label htmlFor="">Email*</label> <br />
            <input type="email" placeholder="Your Email" name='email' {...register("email")}/>
            {errors.email && <p className='error-text'>{errors.email.message}</p>}
            </div>
          </div>

          <div className='conatct-message'>
            <label htmlFor="">Message*</label>  <br />
            <textarea id="subject" name="subject" placeholder="Message" {...register("text")}/>
            {errors.text && <p className='error-text'>{errors.text.message}</p>}
          </div>

          <div className='contact-submit'>
            <button>Submit Now</button>
            <div className='contact-detail'>
            <span> <TbPhoneCall style={{color : "red",    border: "1px solid red",borderRadius: "21px", backgroundColor: "#ff00001f",padding: "0.3rem", height: "1.5rem",width: "1.5rem"}}/> <p> +1238575694</p></span>
            <span> <GoMail style={{color : "red",    border: "1px solid red",borderRadius: "21px", backgroundColor: "#ff00001f",padding: "0.3rem", height: "1.5rem",width: "1.5rem"}}/><p>  example@mail.com</p></span> </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Contact