import React, { useState } from 'react';
import './Forms.css';

const Forms = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  
  const submitForm = async (name, email, phone) => {
    const uniqueId = `${name}-${Date.now()}`; 
    
    const formData = new URLSearchParams();
    formData.append('sid', '085aaaf6');
    formData.append('txnid', uniqueId); 
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);

    try {
      
      const response = await fetch('https://ck.hdm3.in/lp.php', {
        method: 'POST', 
        body: formData,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', 
        },
      });
      
     
      if (response.ok) {
        console.log('Form submitted successfully');
        alert('Form submitted successfully');
      } else {
        console.error('Form submission failed', response.status);
        alert(`Form submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting the form', error);
      alert('Error submitting the form');
    }
  };

  
  const submitHandler = (e) => {
    e.preventDefault(); 
    submitForm(name, email, phone); 
  };

  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <h1>Form to fill..</h1>
        <input
          placeholder='Enter your name'
          id='name'
          className='con-in'
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          id='email'
          placeholder='Email'
          className='con-in'
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          id='phone'
          placeholder='Phone no.'
          className='con-in'
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Forms;
