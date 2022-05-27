import './AnalyticsDashboard.css';
import PageTitle from '../Common/PageTitle/PageTitle';
import {useMemo, useState} from 'react';
import { ResponseType, DataSet } from '../../types';
import LineChart from '../Common/LineChart/LineChart';
import jData from '../../data.json';
import Filter from '../Common/Filter/Filter';
import { computeDataSets, isSelectedItem, unique } from '../../helpers';


const AnalyticsDashboard : React.FC = () => {
  
  const countries : string[] = jData.map((item)=>{return item.country}).filter(unique);
  const camps : string[] = jData.map((item)=>{return item.camp}).filter(unique);
  const schools : string[] = ["Show All",...jData.map((item)=>{return item.school}).filter(unique)];

  const [selectedCountry, setSelectedCountry] = useState<string | null> (countries[0]);
  const [selectedCamp, setSelectedCamp] = useState<string | null> (camps[0]);
  const [selectedSchool, setSelectedSchool] = useState<string | null> (schools[0]);

  
  function handleSelectedFilter (option: string | null)  {
    if(countries.indexOf(option!) != -1)
    setSelectedCountry(option);
    else if(camps.indexOf(option!) != -1 )
    setSelectedCamp(option);
    else
    setSelectedSchool(option);
  } 
  
  const dataSets : DataSet[]  = useMemo(() => {
    const objTobeCalculated : (ResponseType | undefined)[] = jData.map((dataItem)=>{return isSelectedItem(dataItem,selectedCountry,selectedCamp,selectedSchool)})
    return computeDataSets(objTobeCalculated);
  }, [selectedCountry,selectedCamp,selectedSchool])
  
  return (
    <div className="Analytics-Wrapper">
        <PageTitle title="Analysis Chart" subTitle='Number of lessons'/>
        <div className='filters-wrapper'>
              <Filter filterLabel='Select Country' filterItems={countries} onFilterSelect={handleSelectedFilter}/> 
              <Filter filterLabel='Select Camp' filterItems={camps} onFilterSelect={handleSelectedFilter}/> 
              <Filter filterLabel='Select School' filterItems={schools} onFilterSelect={handleSelectedFilter}/> 
        </div>
        <LineChart dataSets={dataSets}/>
    </div>
  );
}

export default AnalyticsDashboard;
