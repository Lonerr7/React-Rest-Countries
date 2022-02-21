import { useEffect, useState } from 'react';
import Select from 'react-select';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'var(--input-color)'
      : 'var(--elems-color)',
    color: 'var(--text-color)',
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: 'var(--elems-color)',
    color: 'var(--text-color)',
  }),
};

const CustomSelect = (props) => {
  const [selectValue, setSelectValue] = useState('');

  const selectValue2 = selectValue?.value ? selectValue.value : '';

  useEffect(() => {
    props.displaySearchedCountries(null, selectValue2);
  }, [selectValue2, props.searchText]);

  const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];

  return (
    <div>
      <Select
        options={options}
        styles={customStyles}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={selectValue}
        onChange={setSelectValue}
      />
    </div>
  );
};

export default CustomSelect;
