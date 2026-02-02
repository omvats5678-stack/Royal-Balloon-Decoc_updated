import React from "react";
import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";

function Home() {
  const categories = [
    { id:1, image:"/images/birthday.webp", title:"Birthday Balloon Decor", price:1999 },
    { id:2, image:"/images/baby-shower.jpg", title:"Baby Shower Setup", price:2499 },
    { id:3, image:"/images/anniversary.jpg", title:"Anniversary Decoration", price:3499 },
    { id:4, image:"/images/proposal.jpg", title:"Proposal Decoration", price:4999 }
  ];

  return (
    <>
      <Hero />
      <section className="container py-5">
        <h2 className="text-center mb-4">Popular Balloon Decorations</h2>
        <div className="row g-4">
          {categories.map(c => (
            <div className="col-md-3" key={c.id}>
              <CategoryCard image={c.image} title={c.title} price={c.price}/>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;