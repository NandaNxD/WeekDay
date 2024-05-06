import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

export default function SearchFilterComponent({label,multiple=false,options,groupByKey,key,width}) {
  const [value, setValue] = useState(multiple?[]:' ');
  
  return (
    <Autocomplete
      multiple={multiple}
      

      id="clear-on-escape"

      groupBy={(option) => option.groupByKey}

      onChange={(event, newValue) => {
        if(multiple){
          setValue([
            ...newValue,
          ]);
        }
        else{
          setValue(newValue)
        }
      }}

      options={options}

      getOptionLabel={(option) => option}

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