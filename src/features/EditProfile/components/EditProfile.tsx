import Avatar from '@/components/Avatar';

import PencilIcon from '@/assets/svgs/pencil.svg?react';
import { EditProfileForm } from './EditProfileForm';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@/components/Button';
import { Profile } from '../types';
import { RootState, useAppDispatch } from '@/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchProfile } from '../thunks';
import Loader, { LoaderType } from '@/components/Loader';
import { debugLog } from '@/services';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
  presentAddress: yup.string().required('Present Address is required'),
  permanentAddress: yup.string().required('Permanent Address is required'),
  city: yup.string().required('City is required'),
  postalCode: yup.string().required('Postal Code is required'),
  country: yup.string().required('Country is required'),
});

export const EditProfile = () => {
  const [localImage, setLocalImage] = useState('');
  const { data, isLoading } = useSelector((state: RootState) => state.profile);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!data) dispatch(fetchProfile());
  }, []);

  const methods = useForm<Profile>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      dateOfBirth: '',
      presentAddress: '',
      permanentAddress: '',
      city: '',
      postalCode: '',
      country: '',
      profilePic: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (data) {
      methods.reset(data);
    }
  }, [data]);

  const onSubmit: SubmitHandler<Profile> = (data) => {
    debugLog('Form Data:', data);
    debugLog('Image Type File: ', data.profilePic instanceof File);
    debugLog('Image Type String: ', typeof data.profilePic === 'string');
  };

  const profilePic = methods.watch('profilePic');
  const name = methods.watch('name');

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        methods.setError('profilePic', {
          type: 'custom',
          message: 'File size should be less than 2MB',
        });
        return;
      }

      if (!file.type.startsWith('image/')) {
        methods.setError('profilePic', {
          type: 'custom',
          message: 'File should be an image',
        });
        return;
      }

      methods.setValue('profilePic', file, { shouldValidate: true });
      const reader = new FileReader();
      reader.onload = () => {
        setLocalImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const previewImage =
    localImage ||
    (typeof profilePic !== 'string' && profilePic instanceof File
      ? URL.createObjectURL(profilePic)
      : profilePic);

  return (
    <FormProvider {...methods}>
      <form
        className="flex gap-x-units-unit-60 my-units-unit-40 mx-units-unit-30"
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
      >
        <div className="relative  w-[90px] h-[90px]">
          <label htmlFor="profilePic" className="cursor-pointer">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              id={'profilePic'}
              {...methods.register('profilePic')}
              onChange={handleImageChange}
            />
            {previewImage && (
              <Avatar
                img={previewImage}
                className="w-[90px] h-[90px]"
                alt={name}
              />
            )}
            {!isLoading && (
              <div className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center cursor-pointer">
                <PencilIcon />
              </div>
            )}
            {methods.formState.errors.profilePic && (
              <p className="text-red-600 text-xs text-center mt-4">
                {methods.formState.errors.profilePic.message}
              </p>
            )}
          </label>
        </div>
        <div className="flex flex-col  flex-1">
          <div className="grid grid-cols-2 gap-units-unit-30">
            <EditProfileForm />
          </div>
          <Button
            type="submit"
            text="Save"
            className="text-white mt-units-unit-40  w-[190px]"
          />
        </div>
      </form>
      {isLoading && <Loader type={LoaderType.API_SPINNER} />}
    </FormProvider>
  );
};
