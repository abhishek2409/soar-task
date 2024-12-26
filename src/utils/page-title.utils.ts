export const getPageTitle = (pathname: string) => {
  switch (pathname) {
    case '/':
      return 'Overview';
    case '/settings':
      return 'Settings';
    case '/transactions':
      return 'Transactions';
    default:
      return 'Home';
  }
};
