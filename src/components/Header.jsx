const NAV_LINKS = [
  { label: 'Agency', href: '#agency' },
  { label: 'Products', href: '#products' },
  { label: 'Labs', href: '#labs' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
]

function Wordmark() {
  return (
    <a className="wordmark" href="#top" aria-label="Rubricks home">
      <svg viewBox="0 0 26 22" aria-hidden="true">
        <rect x="0" y="0" width="12" height="6" fill="#9C3A22" />
        <rect x="14" y="0" width="12" height="6" fill="#9C3A22" />
        <rect x="0" y="8" width="5" height="6" fill="#9C3A22" />
        <rect x="7" y="8" width="12" height="6" fill="#9C3A22" />
        <rect x="21" y="8" width="5" height="6" fill="#9C3A22" />
        <rect x="0" y="16" width="12" height="6" fill="#9C3A22" />
        <rect x="14" y="16" width="12" height="6" fill="#9C3A22" />
      </svg>
      Rubricks
    </a>
  )
}

export default function Header() {
  return (
    <header className="wrap">
      <nav className="nav" aria-label="Primary">
        <Wordmark />
        <ul>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
