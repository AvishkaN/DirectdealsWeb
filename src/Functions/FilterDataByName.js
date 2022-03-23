

const FilterDataName=(name,Data)=>{
    let itemIndex=null;
    

    const FilteredObj=Data.filter( (data,i)=>{

        if(data.listTxt==name){
            itemIndex=i;
        }

        
        return data.listTxt==name
    });

     
    return {
            FilteredObj:FilteredObj[0],
            itemIndex:itemIndex,
    };    

};


export default FilterDataName;