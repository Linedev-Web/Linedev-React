'use client'


export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center w-full h-24 border-t">
            Copyright © {new Date().getFullYear().toString()} Linedev
        </footer>
    )
}
