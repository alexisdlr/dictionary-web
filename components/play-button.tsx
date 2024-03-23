import Image from 'next/image'
import React from 'react'

const PlayButton = ({audio}: {audio: string}) => {
  return (
    <button >
      <Image src="/assets/images/icon-play.svg" alt="icon play" width={50} height={50} />
    </button>
  )
}

export default PlayButton