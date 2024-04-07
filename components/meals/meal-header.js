import classes from "@/app/meals/page.module.css"
import Link from 'next/link'
export default function MealHeader(){

    return(
        <header className={classes.section}>
            <h1>
                Delicious meals, created{' '}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share Your Favorite Recipe
                </Link>
            </p>
        </header>
    )
}