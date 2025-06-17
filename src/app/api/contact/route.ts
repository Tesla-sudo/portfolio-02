import { NextResponse } from 'next/server';
import  { supabase }  from '@/lib/supabaseClient';



export async function POST(req:Request
){try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;
    const { error } = await supabase.from('users-table').insert([{ name, email, phone, service, message }]);

    if(error){ return NextResponse.json({ success:
        false, error: error.message});
        }
        return
        NextResponse.json({ success: true });
} catch(error: unknown) {
   let message = 'Unknown error';
   if (error instanceof Error){
    message = error.message;
   } return NextResponse.json({ success:
    false, error: message 
   });
}} 