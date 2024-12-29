export const getPageTitle = (pathname: string) => {
  switch (pathname) {
    case '/':
      return 'Overview';
    case '/settings':
    case '/settings/edit-profile':
    case '/settings/preference':
    case '/settings/security':
      return 'Settings';
    case '/transactions':
      return 'Transactions';
    default:
      return 'Home';
  }
};
