'use client'

import { SplineScene } from "./splite";
import { Card } from "./card"
import { Spotlight } from "./spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-[#FAF6EE] relative overflow-hidden border border-slate-950/10 shadow-xl rounded-2xl">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#2563EB"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center text-left">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#1A1D24] leading-tight">
            Interactive 3D <br />
            <span className="text-blue-600 bg-clip-text">Experience</span>
          </h1>
          <p className="mt-4 text-slate-600 max-w-lg text-sm sm:text-base leading-relaxed">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-1/2 md:h-full w-full min-h-[250px]">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
