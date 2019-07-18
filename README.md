# hyena/Hum
### a webapp to modulate and loop your background noise       
## MVPs
1) intuitive ui - simple controls, simple visualization 
2) control and stream sound       
    a. PreSet White, Pink, and Brown Noises      
    b. Loaded with appropriate Seed Sounds
3) select and combine multiple sounds 
4) scripturally modulate volume, then other effects. first combined, then individually 
5) Customize Sounds      
    a. upload and utilize user sounds        
    b. Live Generate Custom Noises
6) Advanced Vizh


## Description        
Many Looping applications allow the user to make music, this one is for making noise. 

Panel will load with a Pink Noise Loop PreSet. The most natural of the Noises.     
Users will be presented with a clear interface to turn the noises on or off, aswellas individual volume knobs. Speed and/or Pitch, continuous active volume modulation, and other effects will be added later.
Users can edit or accompany their Loaded Loops, either through PreSet Noises, Provided Sounds, or User UpLoaded Files. Custom, Generated Noises could be added as a stretch feature. 

The currently streaming audio will be visualized, first with a simple, off-the-shelf visualization, and then through custom and even customizable data analysis and rendering. 

Upload, Configure and Create will be rendered through a modal, although many configuration options will be available from the surface-level ui. 

## Arch & Tech

* Thanks to modern web technologies, I can provide most of this functionality through customization of the `<audio>` element. 
* I will also use `WebAudioAPI` for advanced manipulations.        
* I am still thinking in React but will learn VanillaJS.DOM calls 

This project will begin with no server, although I may end up throwing up a simple MERN BackEnd. WebPack will bundle the necessary local scripts, one to house the audio control logic and one concerned with the rendering. 