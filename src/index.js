/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {

     const hoursForKnowsProgramming = 800;
     const hoursForDoNotKnowsProgramming = hoursForKnowsProgramming + 500;
      
      if (knowsProgramming) {
        
          //  const hoursWithFocus = hoursForKnowsProgramming / config[focus];
          //  return Math.ceil(hoursWithFocus);
      }
       
      else {
              
        const hoursWithFocus = hoursForDoNotKnowsProgramming / config[focus];
        return Math.ceil(hoursWithFocus);
                  
      }
          
  };
  
