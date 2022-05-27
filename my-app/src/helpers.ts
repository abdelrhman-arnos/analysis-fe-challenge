import {DataSet, Months, ResponseType} from './types'

export const unique = (value:string, index:number, self:string[]) => {
    return self.indexOf(value) === index
}

export const isSelectedItem = (item: ResponseType, 
                            selectedCountry:string | null | undefined, 
                            selectedCamp:string | null | undefined, 
                            selectedSchool:string| null | undefined) => {
                                
    if(item.country === selectedCountry && item.camp === selectedCamp && (item.school === selectedSchool || selectedSchool === "Show All"))
    {
        return item
    }
}

export const computeDataSets = (objTobeCalculated : (ResponseType | undefined)[]) => {
        const dataSetsResult : DataSet[] = [];
// [{scholl: hamada, no:[140,130,150.....]},{},{}]
        
    objTobeCalculated.forEach(element  => {
        if(element){
        let obj : DataSet | undefined = dataSetsResult.filter((item)=>{if(item.schoolName === element?.school) return item})[0];
        if(obj == undefined)
        {
            obj = {
                schoolName: element!.school,
                no: [0,0,0,0,0,0,0,0,0,0,0,0]
            }
            const monthNumber : number = Months.indexOf(element!.month);
            obj.no[monthNumber]+=element!.lessons;
            dataSetsResult.push(obj);
        }
        else
        {
            const monthNumber : number = Months.indexOf(element!.month);
            obj.no[monthNumber]+=element!.lessons;
        }
    }
    });
    return dataSetsResult;
}