import Image from "next/image"
import classes from "./main-header.module.css"
import logoImg from '@/assets/logo.png'
import NavLink from "./NavLink"
import Link from "next/link"
export default function MainHeader(){
    
    return(
        <header className={classes.header}>
            <Link className={classes.logo} href="/">
                <Image src={logoImg} alt="A plate with some food" priority/>
                NextLevel food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href={"/meals"}>Browes Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/community"}>Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}