export interface Profile {
  name: string;
  username: string;
  email: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
  profilePic?: File | string;
}

export interface ProfileState {
  data: Profile | null;
  isLoading: boolean;
  error: string;
}
