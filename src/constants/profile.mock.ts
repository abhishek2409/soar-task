import { Profile } from '@/features/EditProfile';
import AvatarIcon from '@/assets/images/avatar1.png';

export const profileMockResponse: Profile = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'G2w4o@example.com',
  password: 'password123',
  dateOfBirth: '1991-09-01',
  presentAddress: '123 Main St',
  permanentAddress: '456 Elm St',
  city: 'New York',
  postalCode: '10001',
  country: 'United States',
  profilePic: AvatarIcon,
};
