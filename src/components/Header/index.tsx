'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image"

export const Header = () => {
    const [showText, setShowText] = useState(true) 
    
    const handleMouseEnter = () => {
        setShowText(true)
    }
    
    const handleMouseLeave = () => {
        setShowText(false)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowText(false) 
        }, 5000)

        return () => clearTimeout(timeout);
    }, []);
    
    return (
        <header className="flex items-center p-6 bg-blue-950">
            <div 
                className={`flex items-center gap-5 bg-white p-2 rounded-${showText ? 'md' : 'full'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image 
                    src='/carlogo.svg'
                    height={30}
                    width={30}
                    alt="car logo"
                />
                {showText && <h1 className="text-black font-bold">Carros</h1>}
            </div>
        </header>
    )
}

