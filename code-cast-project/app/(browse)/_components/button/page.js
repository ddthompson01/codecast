/* This is an example of a component
 that we could store here use elsewhere
 */


import Link from "next/link"  // This is used to navigate us to another page by referencing href link


export default function Button({href, children}) {
    return (
        <Link href={href}>
            <button className="bg-red-600 text-xl">
                {children}
            </button>
        </Link>
        
    )
}