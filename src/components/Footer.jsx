import logoFooter from '../assets/imgs/footer-logo.svg'

export default function Footer () {
    return (
        <footer>
            <div>
                <li>
                <a href='#'>LinkedIn</a>
                </li>
                <li>
                <a href='#'>Crunchbase</a>
                </li>
                <li>
                <a href='#'>Hackernews</a>
                </li>
            </div>
            <div>
                <figure>
                    <img src={logoFooter} alt="" />
                </figure>
            </div>
        </footer>
    )
}