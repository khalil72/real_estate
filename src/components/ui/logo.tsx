import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
   
          <Link href="/" className="flex items-center gap-2.5 group w-fit">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xl font-bold tracking-tight">
              Estate<span className="text-primary">PK</span>
            </span>
          </Link>
  )
}

export default Logo
