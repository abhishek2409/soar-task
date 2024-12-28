import Avatar from '@/components/Avatar';
import AvatarIcon from '@/assets/images/avatar1.png';
import PencilIcon from '@/assets/svgs/pencil.svg?react';
import { EditProfileForm } from './EditProfileForm';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@/components/Button';
import { Profile } from '../types';
import { RootState, useAppDispatch } from '@/store';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchProfile } from '../thunks';
import Loader, { LoaderType } from '@/components/Loader';

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
    },
  });

  useEffect(() => {
    if (data) {
      methods.reset(data);
    }
  }, [data]);

  const onSubmit: SubmitHandler<Profile> = (data) => {
    console.log('Form Data:', data);
  };
  return (
    <FormProvider {...methods}>
      <form
        className="flex gap-x-units-unit-60 my-units-unit-40 mx-units-unit-30"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="relative cursor-pointer w-[90px] h-[90px]">
          <Avatar img={AvatarIcon} className="w-[90px] h-[90px]" />
          <div className="absolute bottom-0 right-0 w-[30px] h-[30px] bg-black rounded-full flex justify-center items-center cursor-pointer">
            <PencilIcon />
          </div>
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
