import React from 'react';
import { useGetAppConfigQuery } from '../redux/apicalls';
import { useSelector } from 'react-redux';

function Navbar() {
  const config = useSelector((state: any) => state.config);

  return (
    <div className="h-12" style={{ backgroundColor: config.mainColor }}>
      <img src="/logo.svg" className="mx-20 w-28 h-12" alt="Logo" />
    </div>
  );
}

export default Navbar;
