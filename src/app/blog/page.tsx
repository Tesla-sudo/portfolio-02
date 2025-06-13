'use client';
import Link from 'next/link';



export default function BlogList(){
    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-6'>
<div className='max-w-2xl w-full bg-white p-6 rounded-lg shadow mb-6'>
    <h2 className='font-bold text-2xl mb-2 text-gray-800'>Why I love Frontend Development</h2>
    <p className='mb-4 text-gray-800'>
        Frontend development lets me turn ideas into interactive experiences. It's a blend of logic
        , design and creativity. I enjoy seeing immediate results as I build and bring layouts to life.
    </p>
    <Link href='/blog/why-i-love-frontend'>
    <button className='text-blue-500 hover:underline'>
Read more
    </button>
    </Link>
</div>

<div className='max-w-2xl w-full bg-white p-6 rounded-lg shadow mb-6'>
    <h2 className='font-bold text-2xl mb-2 text-gray-800'>My Journey into Writing</h2>
    <p className='mb-4 text-gray-800'>
        Writing started as a personal outlet, but evolved into a way to share knowledge and connect
        with others. It's helped sharpen my thinking and clarify my ideas.
    </p>
    <Link href='/blog/my-journey-into-writing'>
    <button className='text-blue-500 hover:underline'>
Read more
    </button>
    </Link>
</div>


<div className='max-w-2xl w-full bg-white p-6 rounded-lg shadow'>
    <h2 className='font-bold text-2xl mb-2 text-gray-800'>Helping brands show up in impactful ways on Reddit</h2>
    <p className='mb-4 text-gray-800'>
Reviewing posts and content on Reddit gives me insights into trends and user behaviour.
It's fun, informative and a great way to improve analytical skills and also help new brands grow.
    </p>
    <Link href='/blog/reddit-reviewing-explained'>
    <button className='text-blue-500 hover:underline'>
Read more
    </button>
    </Link>
    
</div>
        </div>
    );
}