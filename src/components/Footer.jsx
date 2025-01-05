import React from 'react'

const Footer = () => {

    // Simple footer with my details
    // Name: Premved Dhote
    // Email: premveddhote@gmail.com
    return (
        <div>
            <footer className="footer text-black p-4">
                <p className="text-center">
                    <span className="font-bold mr-5">Premved Dhote</span>
                    <a href="mailto:premveddhote@gmail.com" className="underline">premveddhote@gmail.com</a>
                </p>
            </footer>
        </div>
    )
}

export default Footer
