 export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

 export function getArray(nums, existing){
   if(existing.length >= nums){
    const array = [];
    while(array.length<nums){
        const randomNumber = getRndInteger(1,existing.length);
        const prev = existing[randomNumber-1];
        if(prev)
        {
          existing[randomNumber-1]= existing[existing.length-1];
          existing[existing.length-1] = prev;
          array.push(existing.pop()); 
        }
    }
    return {mint: array, remaining:existing}
   }
}
