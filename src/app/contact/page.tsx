'use client';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import React from 'react';
import { useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { error } from 'console';
import  { supabase }  from '@/lib/supabaseClient';

export default function ContactPage(){

    const [formData, setFormData] =
    useState({
        name:'',
        email:'',
        phone:'',
        service:'',
        message:'',
    });
    const [status, setStatus] = useState('');
    const [sending, setSending] = useState(false);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setStatus('');

        try {
            const { data, error } = await supabase.from('users-table').insert([
                { name: formData.name, email: formData.email, phone: formData.phone, sevice: formData.service, message: formData.message }
            ]);
            if (error){
                console.error('insert error:', error);
                alert("Something went wrong, sent me message via LinkedIn or email")
            } else {
                alert("Message sent successfully")
            }
        } catch(err){
            console.error('Unexpected error:', err);
            alert('Something went wrong, sent me message via LinkedIn or email');
        }
setSending(false);
        
    };
    

    
    return(
        <div className='min-h-screen flex items-center justify-center bg-gray-100 p-8'>
<div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-10 rounded-lg shadow-md'>
{/*Form Section*/}

<div>
    <h2 className='text-2xl font-bold mb-6 text-blue-800'>
Let's work together
    </h2>
    <form  onSubmit={handleSubmit} className='space-y-4'>
        <input name='name' type="text" placeholder='Name'  onChange={handleChange} value={formData.name} required className='w-full p-3 border rounded text-black'/>
         <input name='email' type="email" placeholder='Email Address' onChange={handleChange} value={formData.email}  required className='w-full p-3 border rounded text-black'/>
<input type="tel" name='phone' placeholder='Phone Number'onChange={handleChange} value={formData.phone} required className='w-full p-3 border rounded text-black'/>
<select name='service' onChange={handleChange} value={formData.service} className='w-full p-3 border rounded text-black'>
    <option value="">Select Service</option>
    <option value="frontend">Frontend development</option>
    <option value="content">Content Writing</option>
    <option value="reddit">Reddit Reviewing</option>
</select>
<textarea name='message' onChange={handleChange} value={formData.message} placeholder='Additional Information' rows={4} className='w-full p-3 border rounded text-black'></textarea>

<button 
type='submit'

className={`w-full p-3 rounded bg-blue-600 text-white font-semibold ${sending ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
>
    Send Message
</button>
    </form>
</div>
{/*Contact info Section*/}
<div className='flex flex-col justify-center space-y-6 text-lg'>
<div className='flex items-center'>
<span className='mr-4 text-green-400'>
<FaPhone />
</span>
<span className='text-black'>+254717546693</span>
</div>
<div className='flex items-center'>
<span className='mr-4 text-blue-300'>
<FaEnvelope/>
</span>
<span className='text-black'>
difrelen@gmail.com
</span>
</div>
<div className='flex items-center'>
<span className='mr-4 text-red-500'>
<FaMapMarkerAlt/>
</span>
<span className='text-black'>Moi University, Eldoret</span>
</div>
</div>
</div>
        </div>
    );
}