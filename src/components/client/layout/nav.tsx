import './nav.scss'

export function NavComponent({path, lang}: { path: string, lang: string }) {
    const activeClass = (item: string) => {
        if (!item) {
            return path === `/${lang}` ? 'active' : ''
        }
        return path.startsWith(`/${lang}${item}`) ? 'active' : ''
    }
    return (
        <nav className={'navComponent'}>
        </nav>
    )
}
