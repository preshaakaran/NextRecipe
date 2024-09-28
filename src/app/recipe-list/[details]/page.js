import RecipeDetailsItem from "@/components/recipe-details";

async function fetchRecipeDetails(currentRecipeId) {
    try {
        const response = await fetch(`https://dummyjson.com/recipe/${currentRecipeId}`);
        const data = await response.json();
        return data;
        
    } catch (error) {
        throw new Error(error);
        
    }
}

export default async function RecipeDetails({params}) {

    const recipeDetails = await fetchRecipeDetails(params?.details);

    return (
        <RecipeDetailsItem recipeDetails={recipeDetails}/>
        
    );

}