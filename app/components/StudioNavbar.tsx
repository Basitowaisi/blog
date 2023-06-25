import Link from "next/link"
import React from "react"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid"

const StudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <Link className="text-[#f7ab0a] flex items-center" href="/">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#f7ab0a] mr-2" />
          Go to website
        </Link>
        <div className="hidden md:flex p-3 rounded-lg justify-center border-2 border-[#f7ab0a]">
          <h1 className="font-bold text-white">
            More interesting stuff like this on my github:
          </h1>
          <Link
            href="https://github.com/basitowaisi"
            className="text-[#f7ab0a] font-bold ml-2"
          >
            @basitowaisi
          </Link>
        </div>
      </div>
      {props.renderDefault(props)}
    </div>
  )
}

export default StudioNavbar
