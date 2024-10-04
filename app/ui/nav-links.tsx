'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>
 
      <Link className={`link ${pathname === '/user' ? 'active' : ''}`} href="/user">
        User
      </Link>

      <Link className={`link ${pathname === '/user/settings' ? 'active' : ''}`} href="/user/settings">
        User Settings
      </Link>
    </nav>
  )
}