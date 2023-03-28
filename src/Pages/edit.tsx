import React from 'react'
import { Link } from 'react-router-dom'
import { useGetProductQuery } from '../redux/apicalls'
import { BiHomeAlt2 } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";

const DetailEdit = React.lazy(() => import('../components/Edit/DetailEdit'));
const TextEdit = React.lazy(() => import('../components/Edit/TextEdit'));
const VideoEdit = React.lazy(() => import('../components/Edit/VideoEdit'));

function Edit() {
  const { isFetching, error, data } = useGetProductQuery({})

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div className='w-full bg-gray-100 px-2 md:pr-32'>
      <div className='w-full flex justify-between px-2 md:px-10 py-4' >
        <div className='flex space-x-2 test-xs' > <BiHomeAlt2 className='mt-1' />  <FaGreaterThan className='mt-1 mx-3 text-gray-400' /> <h1>Offer</h1> <FaGreaterThan className='mt-1 mx-3 text-gray-400' />  <h1>{data.name}</h1>  </div>
        <Link className='bg-blue-600 text-gray-100 px-3 text-base rounded-lg py-1' to='/product'>View</Link>
      </div>
      <div className='w-full  space-y-8 pb-10' >
        <React.Suspense fallback={<div>Loading...</div>}>
          <TextEdit data={data} />
          <VideoEdit data={data} />
          <DetailEdit data={data} />
        </React.Suspense>
      </div>
    </div>
  )
}

export default Edit;
