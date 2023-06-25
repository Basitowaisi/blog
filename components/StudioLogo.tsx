import Image from "next/image"
import React from "react"

function StudioLogo(props: any) {
  const { title, renderDefault } = props
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover"
        width={50}
        alt="Logo"
        height={50}
        src="/logo.png"
      />

      {renderDefault(props)}
    </div>
  )
}

export default StudioLogo
