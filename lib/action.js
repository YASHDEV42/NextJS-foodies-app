'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache";

const isInvalidText = (text) => {
    return !text || text.trim() === '';
}
 
export const shareMeal = async (formData) => {
    const meal = {
        title: formData.get('title'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
    }
    if(isInvalidText(meal.title) ||
     isInvalidText(meal.summary) ||
     isInvalidText(meal.creator) ||
     isInvalidText(meal.creator_email) ||
     !meal.creator_email.includes('@') ||
     !meal.image || meal.image.size === 0
     ){
        throw new Error('Invalid input');
     }
    await saveMeal(meal);
    revalidatePath('/meals','layout');
    redirect("/meals")
}