import Navbar from "@/app/navbar/page";
import Link from "next/link";
import back from "@/images/back-arrow.png";
import Footer from "@/app/Footer/page";

const fixedNavbarStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 1000,
  backgroundColor: "white",
};

export default function RecipeDetailsItem({ recipeDetails }) {
  return (
    <div >
      <div style={{ height: "12vh" }} >
        <div style={fixedNavbarStyle}>
          <Navbar />
        </div>
      </div>
      <div style={{ height: "86vh" }} className="flex">
        <Link href={"/recipe-list"}>
          <img src={back.src} className="h-12 w-12 p-2 m-2" />
        </Link>
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="w-full lg:sticky top-0 sm:flex gap-2">
              <img
                src={recipeDetails?.image}
                alt={recipeDetails?.name}
                className="w-4/5 rounded object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-950">
                {recipeDetails?.name}
              </h2>
              <div className="gap-4 mt-5">
                <p className="text-2xl text-gray-700">
                  {recipeDetails?.mealType[0]}
                </p>
              </div>
              <div className="mt-5">
                <p className="text-xl text-gray-800">
                  {recipeDetails?.cuisine}
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-bold text-gray-700">
                  Ingredients:
                </h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                  {recipeDetails?.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-bold text-gray-700">
                  Instructions:
                </h3>
                <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                  {recipeDetails?.instructions.map((instructions, index) => (
                    <li key={index}>{instructions}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
               </div> 
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
}
