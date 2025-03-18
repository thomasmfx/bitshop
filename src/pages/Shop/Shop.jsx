import { Outlet } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';

export default function Shop() {
  const context = useOutletContext();

  return <Outlet context={context} />;
}
