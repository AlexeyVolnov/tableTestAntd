const idCreatorHelper = (startValue:number)=>():number=>startValue+=1;
export const idCreator = idCreatorHelper(0)