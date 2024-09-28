import RecipeList from "@/components/recipe-list";

async function fetchListOfRecipes() {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        return data?.recipes
        
    } catch (error) {
        throw new Error(error);
        
    }
}

export default async function Recipes() {
    const recipeList = await fetchListOfRecipes();
    return (
        <div className="w-full min-h-screen">
            <RecipeList recipeList={recipeList}/>
        </div>
    );
}
