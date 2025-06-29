import React, { use, useEffect, useState } from "react"
import { IoSunny, IoMoon } from "react-icons/io5"
const themes = ["light", "dark"]

export default function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false)
    const [theme, setTheme] = useState(() => {
        if (import.meta.env.SSR) {
            return undefined
        }
        if (typeof localStorage !== 'undefined' && localStorage.getItem("theme")) {
            return localStorage.getItem("theme")
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {

            return "dark"
        }
        return "light"
    })
    const toggleTheme = () => {
        const th = theme === "light" ? "dark" : "light"
        localStorage.setItem("theme", th)
        setTheme(th)
    }

    useEffect(() => {
        const root = document.documentElement
        if (theme === "light") {
            root.classList.remove("dark")
        } else {
            root.classList.add("dark")
        }
    }, [theme])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return isMounted ? (
        <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 dark:bg-zinc-600">
            {themes.map(th => {
                const checked = th === theme
                return <button key={th} className={`${checked ? "bg-white text-black": ""} cursor-pointer rounded-3xl p-2`}
                    onClick={toggleTheme} aria-label="Toggle Theme">
                    {th === "light" ? <IoSunny/> : <IoMoon/>}
                </button>
            })}
        </div>) : (<div/>)

}