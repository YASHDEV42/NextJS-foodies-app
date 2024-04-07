import MealsGrid from "@/components/meals/meals-grid"
import Link from "next/link"
import classes from "@/app/meals/page.module.css"
import { getMeals } from "@/lib/meals"
import { Suspense } from "react"
import load from '../loading.module.css'
import MealHeader from "@/components/meals/meal-header"

async function MealsFetching(){
    const meals = await getMeals();

    return <MealsGrid meals={meals} />
}
export default async function Meals(){
    return (
        <>
            <MealHeader />
            <main className={classes.main}>
                <Suspense fallback={<p className={load.loading}>Fetching data...</p>}>
                    <MealsFetching />
                </Suspense>
            </main>
        </>
    )
}