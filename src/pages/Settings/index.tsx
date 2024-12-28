import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Tabs from '@/components/Tabs';

const EditProfile = lazy(() =>
  import('@/features/EditProfile').then((module) => ({
    default: module.EditProfile,
  }))
);
const Preference = lazy(() =>
  import('@/features/Preference').then((module) => ({
    default: module.Preference,
  }))
);
const Security = lazy(() =>
  import('@/features/Security').then((module) => ({ default: module.Security }))
);

const tabs = [
  {
    name: 'Edit Profile',
    href: '/settings/edit-profile',
  },
  {
    name: 'Preference',
    href: '/settings/preference',
  },
  {
    name: 'Security',
    href: '/settings/security',
  },
];

const Settings = () => {
  return (
    <div className="bg-white rounded-units-unit-25 md:p-units-unit-30">
      <Tabs tabs={tabs} />
      <Routes>
        <Route path="" element={<Navigate to="edit-profile" replace />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="preference" element={<Preference />} />
        <Route path="security" element={<Security />} />
      </Routes>
    </div>
  );
};

export default Settings;
