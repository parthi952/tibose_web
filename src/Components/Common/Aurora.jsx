import React from 'react'

export const Aurora = () => {
  return (
     <div className="absolute inset-0 pointer-events-none z-0">
            <svg 
              viewBox="0 0 800 800" 
              className="absolute -bottom-20 -left-20  opacity-60"
            >
              {[...Array(25)].map((_, i) => (
                <path
                  key={i}
                  // Increased curve complexity and length
                  d={`M -100,${700 - i * 4} 
                      C 100,${600 - i * 12} 
                        250,${850 - i * 5} 
                        450,${500 - i * 20} 
                      S 750,${200 - i * 8} 
                        1000,${400}`}
                  fill="transparent"
                  stroke="#0078d4"
                  strokeWidth={1}
                  strokeOpacity={0.6 + (i * 0.02)}
                />
              ))}
            </svg>
          </div>
  )
}
