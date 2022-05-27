import React from 'react';
import './Filter.css';

interface Props{
  filterLabel : string
  filterItems: string[],
  onFilterSelect: (option: string | null) => void
}

const Filter : React.FC<Props> = ({filterLabel, filterItems, onFilterSelect}) => {

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onFilterSelect(value);
    event.preventDefault();
  };

  return (
    <div className='filter-wrapper'>
        <label className='filter-label'>{filterLabel}</label>
        <select className='filter-select' onChange={selectChange}>
          {filterItems.map((item,index)=><option key={index} value={item}>{item}</option>)}
        </select>
    </div>
  );
}

export default Filter;
