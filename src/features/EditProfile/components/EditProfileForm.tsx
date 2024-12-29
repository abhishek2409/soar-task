import TextInput from '@/components/TextInput';
import { Controller, useFormContext } from 'react-hook-form';

const inputFields = [
  {
    name: 'name',
    type: 'text',
    label: 'Your Name',
    placeholder: 'Enter your name',
  },
  {
    name: 'username',
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username',
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
  {
    name: 'dateOfBirth',
    type: 'date',
    label: 'Date of Birth',
    placeholder: 'Enter your date of birth',
  },
  {
    name: 'presentAddress',
    type: 'text',
    label: 'Present Address',
    placeholder: 'Enter your present address',
  },
  {
    name: 'permanentAddress',
    type: 'text',
    label: 'Permanent Address',
    placeholder: 'Enter your permanent address',
  },
  {
    name: 'city',
    type: 'text',
    label: 'City',
    placeholder: 'Enter your city',
  },
  {
    name: 'postalCode',
    type: 'text',
    label: 'Postal Code',
    placeholder: 'Enter your postal code',
  },
  {
    name: 'country',
    type: 'text',
    label: 'Country',
    placeholder: 'Enter your country',
  },
];

export const EditProfileForm = () => {
  const { control } = useFormContext();
  return inputFields.map((input) => (
    <Controller
      key={input.name}
      name={input.name}
      control={control}
      render={({ field, fieldState }) => (
        <TextInput
          {...field}
          placeholder={input.placeholder}
          label={input.label}
          error={fieldState.error?.message}
          type={input.type}
          className={{
            input:
              '!border-solid border border-borderDarkGray rounded-units-unit-15',
          }}
        />
      )}
    />
  ));
};
