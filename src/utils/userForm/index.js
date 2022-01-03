import {useState} from 'react';

export const useForm = initialValue => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (formType, formParams) => {
      return setValues({...values, [formType]: formParams});
    },
  ];
};
