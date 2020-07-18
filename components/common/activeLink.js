import { useRouter } from 'next/router';

function ActiveLink({ children, href, className }) {
    const router = useRouter()
    const active_class = router.pathname === href ? ' active' : '';
  
    const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
    }
  
    return (
      <a href={href} onClick={handleClick} className={className+active_class}>
        {children}
      </a>
    )
  }
  
  export default ActiveLink