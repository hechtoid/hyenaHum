# hyena/Hum
### a webapp to modulate and loop your background noise       
## MVPs
- [x] intuitive ui - simple controls, simple visualization 
- [x] control and stream sound       
    * PreSet White, Pink, and Brown Noises      
    * Loaded with appropriate Seed Sounds
- [x] select and combine multiple sounds 
- [ ] scripturally modulate volume, then other effects. first combined, then individually 
- [ ] Customize Sounds      
    * upload and utilize user sounds        
    * Live Generate Custom Noises
- [ ] Advanced Vizh


## Description        
Many Looping applications allow the user to make music, this one is for making noise. 

Panel will load with a Pink Noise Loop PreSet. The most natural of the Noises.     
Users will be presented with a clear interface to turn the noises on or off, aswellas individual volume knobs. Speed and/or Pitch, continuous active volume modulation, and other effects will be added later.
Users can edit or accompany their Loaded Loops, either with PreSet Noises, Provided Sounds, or User UpLoaded Files. Custom, Generated Noises will be added as an additional feature. 

The currently streaming audio will be visualized, first with a simple, off-the-shelf visualization, and then through custom and even customizable data analysis and rendering. 

Upload, Configure and Create will be rendered through a modal, although many configuration options will be available from the surface-level ui. 

## Arch & Tech

* Thanks to modern web technologies, I can provide most of this functionality through customization of the `<audio>` element. 
* I am still thinking in React but will learn VanillaJS.DOM calls to update the ui.
    * augmented with CSS styling to increase intuitiveness. 
* I will also use `WebAudioAPI` for Noise Generation, and advanced manipulation.        

This project will begin with no server, although I may end up throwing up a simple MERN BackEnd. WebPack will bundle the necessary local scripts, one to house the audio control logic and one concerned with the rendering. 

## TIMELINE

### Day 0 
1) Proposal Draft and Proposal
    * WireFrame?
2) Basic App Structure
### Day 1
1) Load and Play Sounds
    * Seed Loops
2) Resarch and import `WebAudioAPI`
    * Define PreLoaded Noises    
3) Sounds play Together
### Day 2
1) Basic index page structure, HTML & JS
    * Create and Configure ui elements
    * Style and Guide
2) Simple Vizh
### Day 3
1) Load other Sounds into Looper
2) Allow User UpLoad of other Sounds
### Day 4
1) Advanced Vizh
2) Allow User Customization of Noise

**noise.js via Zach Denton**
