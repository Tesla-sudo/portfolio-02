import { Metadata } from "next";



const blogPosts: Record<string, 
{ title: string; content:
    string
}> = {
    'why-i-love-frontend': {
        title: 'Why I Love Frontend Development',
        content: 'I love frontend development because it is the one space in tech where I feel both creative and productive at the same time. There is something really exciting about writing a few lines of code and instantly seeing a beautiful change happen on the screen. It is fast, interactive and so satisfying. I enjoy taking ideas - whether it is simple layout or a full-blown design - and turning them into something that people can actually see and use. That process of blending design with logic, using tools like HTML, CSS, JavaScript, React, Nextjs and Tailwindcss feels like painting with code. It gives me a chance to express myself while still solving problems. It is never boring - there is always something something to tweak, animate, or improve. And the fact that I can see results of my work immediately makes me even more motivated. Every time I build a new component, a page layout or a responsive design, I get that same excitement like I am creating something fresh. Frontend development just feels natural to me, like a space where I get to have fun, build fast, and bring creativity to life through code.'
        
    },
    'my-journey-into-writing': {
        title: 'My Journey Into Writing',
        content: 'I started writing like a hoby then entertainment - just a way to process my thoughts and document what I was learning along the way. At first, it felt like journaling a private space to explore ideas, reflect on experiences and express what I could not always say out loud. But over time, something shifted. I realized that writing was not just helping me understand things better - it was becoming a powerful tool to educate others too. Every time I explained a concept, broke something down, or shared a story, someone out there related to it, learned from it, or felt inspired by it. That connection turned writing into more than a hobby. It became a bridge between learning and teaching, between thinking and sharing. Now, when I write, I am not just capturing my journey - I am inviting others to walk with me. Whether I am explaining something I have just figured out or revisiting lessons I have learned before, writing helps me grow and helps others grow too. It started as my quiet space, but now it is also my loudest tool for impact.'
    },
    'reddit-reviewing-explained': {
        title: 'Reddit Reviewing Explained',
        content: 'Spending time reviwing posts and threads on Reddit has become one of the most unexpectedly insightful parts of my learning routine. At first, I just browsed casually - reading through questions, opinions and rants on subreddits related to tech, writing and design. But the more I paid attention, the more I started to notice patterns. I began seeing where people consistently got stuck, what concepts they misunderstood and which explations actually helped them. Reddit became this unfiltered mirror of real struggles, raw thoughts, and community-level feedback that is hard to find in polished tutorials or official documentation. It is not just about helping others solve problems. Reading through these discussions gives me clearer sense of what is worth learning deeper, how to communicate better and how to spot gaps in my own understanding. Sometimes, the best way to learn is not from the top rated answer - but from the confusion in the comments. That is where the real questions are. That is where clarity is needed. Reviewing Reddit is not just informative - it is a chance to connect with real people, real problems and real growth.'
    }
};
interface PageProps{
    params: {
        slug: string;
    };
}
export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    return{
        title: `Blog: ${params.slug}`,

};
};

export default function BlogPost({ params }: PageProps ) {
    const { slug } = params;
    const post = blogPosts[params.slug];
    if (!post) return <div className='p-6 text-red-500'>
Post not found,
    </div>;
    return(
        <div className='p-6'>
<h1 className='text-3xl font-bold mb-4'>{post.title}</h1>
<p>{post.content}</p>
        </div>
    );
}









