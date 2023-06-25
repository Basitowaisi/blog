import Image from "next/image"
import Link from "next/link"
import React from "react"

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/logo.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>
      <div>
        <Link
          href={"https://www.github.com/basitowaisi"}
          className="px-5 py-3 md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full text-center"
        >
          Visit my Github
        </Link>
      </div>
    </header>
  )
}

export default Header
