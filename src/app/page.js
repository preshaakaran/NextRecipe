import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar/page";
import bgImage from "@/images/bg.jpg";
import Footer from "./Footer/page";

export default function Home() {




  const testimonials = [
    { name: "Alice", text: "I love the recipes! They are easy to follow and delicious!" },
    { name: "Bob", text: "Recipe Haven has transformed my cooking. Highly recommended!" },
    { name: "Cathy", text: "Great variety of recipes for every occasion!" },
  ];

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          height: "94vh",
        }}
      >
        <Navbar />

     
        <section className="hero text-center mb-8 p-2 mt-4">
        <h2 className="text-4xl font-bold mb-2">Welcome to NextRecipe</h2>
        <p className="text-2xl mb-4">Discover delicious recipes and cooking tips.</p>
        <button className="  font-bold py-2 px-4 rounded m-2 text-xl" style={{ backgroundColor: 'rgb(230 164 98)'}}>
          <a href="/recipe-list">View Recipes</a>
        </button>  
       
      </section>
     
      <section className="testimonials p-3">
        <h3 className="text-3xl font-semibold mb-4">Our testimonials</h3>
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="italic">"{testimonial.text}"</p>
              <p className="font-bold text-right">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

  
      </div>
      <div className="bottom-0" 
      style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          height: "6vh",
        }}>
        <Footer />
      </div>
    </div>
  );
}
