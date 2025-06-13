import { NextResponse } from 'next/server';
import  { supabase }  from '@/lib/supabaseClient';



export async function POST(req:Request
) {
    const body = await req.json()
    const { name, email, phone, service, message } = body
    const { data, error } = await supabase.from('users-table').insert([{ name, email, phone, service, message }])

    if(error){ return NextResponse.json({ success:
        false, error: error.message});
        }
        return
        NextResponse.json({ success: true });
}