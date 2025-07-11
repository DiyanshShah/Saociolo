import Link from 'next/link';

export default function NotFound(){
    return (
        <div>
            <h1>Page not Found</h1>
            <p>Could not find the requested page, did you write some bull shit</p>
            <Link href='/'>Return Home</Link>
        </div>
    )
}