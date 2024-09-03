import React from 'react'
import "./Hero.css"
import pattern from "../../assets/pattern.png"

export default function Hero() {
  return (
    <section className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-2 reverse">
            <div className="flex flex-col justify-center items-start md:w-1/2 space-y-4">
              <h1 className="heroheader text-4xl font-bold text-[#2D3748]">Elegance in Every Stitch</h1>
              <h1 className="heroheader text-3xl font-semibold text-[#2D3748]">Celebrate Tradition with <span className='dolz'>DOLZ</span> Home of Fashion</h1>
              <div>
              <p class="herotext text-lg">At DOLZ Home of Fashion, we bring the rich heritage of native attires to life with exquisite designs for women and children. Located in the heart of Canada, our handcrafted pieces blend tradition with modern style, offering timeless outfits for every occasion. Whether you're looking for bespoke outfits or premium fabrics, DOLZ Home of Fashion celebrates your unique style with elegance and quality.</p>
              </div>
                <div class="flex gap-6 group py-8">
                  <button className="bg-[#EC4899] text-white py-2 px-4 rounded">Get Started</button>
                  <button className="bg-[#667EEA] text-white py-2 px-4 rounded">Learn More</button>
                </div>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 flex justify-center md:justify-end">
            <img src={pattern} alt="fashion-hero" className='native-image-pattern'/>
            </div>
        </div>
</section>

  )
}
