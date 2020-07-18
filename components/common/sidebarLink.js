import { useRouter } from 'next/router';

function SidebarLink({ children, href, className }) {
    const router = useRouter()
    const active_class = router.pathname === href ? 'active' : '';
  
    const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
    }
  
    return (
      <a href={href} onClick={handleClick} className={`nav-link d-flex justify-content-start rounded-pill ${active_class}`}>
        {children}
      </a>
    )
  }
  
  export default SidebarLink