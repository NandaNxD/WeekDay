import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../../../store/appSlice';

export default function SearchFilterComponent({label,multiple=false,options,onChangeFn}) {
  const dispatch=useDispatch();

  return (
    <Autocomplete
      multiple={multiple}
      
      id="clear-on-escape"

      groupBy={(option) => option.groupByKey}

      onChange={(event, newValue) => {
        dispatch(setFilter({type:label,filterData:newValue}));
      }}

      options={options}

      getOptionLabel={(option) => String(option)}

      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
            key={option}
            label={option}
            {...getTagProps({ index })}
          />
        ))
      }
      style={{ width: `${label.length+10}ch`,minWidth:'fit-content' }}
      renderInput={(params) => (
        <TextField {...params} label={label}/>
      )}
    />
  );
}