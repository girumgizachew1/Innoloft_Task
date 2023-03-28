import React from 'react';
import { useGetProductQuery } from '../../redux/apicalls';
import { CiLocationOn } from "react-icons/ci";
import { TextDisplayProps } from '../../constriants/Interface';
import { useSelector } from 'react-redux';

function TextDisplay({ data }: TextDisplayProps) {
  const config = useSelector((state: any) => state.config);

  const { company, user, picture, name, description } = data;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox= ${company?.address?.longitude}%2C${company?.address?.latitude}%2C${company?.address?.longitude}%2C${company?.address?.latitude}&amp;layer=mapnik`

  return (
    <div className="w-full h-full bg-white flex flex-col md:flex-row rounded-lg shadow-sm px-2 border border-gray-200">
      <div className={`${config.hasUserSection ? "basis-2/3 w-full" : "basis-3/3 w-full"}  `}>
        <div className="border-r border-gray-200">
          <img src={picture} className="h-64 w-full" alt="" />
          <h1 className="text-base font-bold px-4 py-1 text-gray-700">{name}</h1>
          <p className="text-sm px-4 py-1 text-gray-500">{description}</p>
        </div>
      </div>
      <div className={`${config.hasUserSection ? "basis-1/3 w-full" : "hidden"}  `}>
        <h1 className="text-sm font-semibold text-gray-700 mt-4 ml-3">Offered by</h1>
        <div className='py-2' >
          <img src={company?.logo} className="h-12 w-72 lg:w-56 mx-4 mt-4" alt="" />
        </div>
        <div className="flex text-xs text-gray-500 mx-4 mt-4">
          <div>
            <img src={user?.profilePicture} className="h-10 w-10 rounded-full" alt="" />
          </div>
          <div className="ml-3 mt-1">
            <h1>
              {user?.firstName} {user?.lastName}
            </h1>
            <h1>{company?.name}</h1>
          </div>
        </div>
        {company?.address && (
          <div className="mt-4 mx-4">
            <div className='flex flex-col text-xs text-gray-400 my-3' >
              <div className='flex' >
                <CiLocationOn /> <p>{company?.address?.street} {company?.address?.house}</p>
              </div>
              <p className='ml-2' >{company?.address?.zipCode} {company?.address?.city?.name} {company?.address?.country?.name}</p>


            </div>
            <iframe className='' title="Google Maps" width="100%" height="200" frameBorder="0" style={{ border: 0 }} src={mapUrl} allowFullScreen />
          </div>
        )}
      </div>
    </div>
  );
}

export default TextDisplay;
