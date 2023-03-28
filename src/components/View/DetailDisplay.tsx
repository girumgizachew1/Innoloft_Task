import React from 'react'
import { GiHorseHead } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { BsCashCoin } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { DetailDisplayProps } from '../../constriants/Interface';


function DetailDisplay({ data }: DetailDisplayProps) {
    const { trl, investmentEffort, businessModels } = data;

    return (
        <div className="w-full h-full bg-white flex flex-col rounded-lg shadow-sm px-2">
            <h1 className="text-gray-600 text-base font-semibold px-4 pt-4">Offer detail</h1>
            <div className=" m-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 text-xs text-gray-500">
                    <div >
                        <div className="text-gray-500 font-semibold my-2  flex text-base ">
                            <GrTechnology />
                            <p className='ml-2' >Technology</p>
                        </div>
                        <span className="bg-gray-200 px-2 py-2 rounded-lg ml-2">{data.type.name}</span>
                    </div>

                    <div>
                        <div className="text-gray-500 font-semibold my-2  flex text-base ">
                            <GiHorseHead />
                            <p className='ml-2' >Business Model</p>
                        </div>
                        {businessModels && businessModels.length > 0 ? (
                            <ul className=" text-gray-600 grid grid-cols-2 gap-6 px-2 py-2 rounded-lg">
                                {businessModels.map(businessModel => (
                                    <li key={businessModel.id}>
                                        <span className="bg-gray-200 px-2 py-2 rounded-lg">{businessModel.name}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600">N/A</p>
                        )}
                    </div>


                    <div className='' >
                        <div className="text-gray-500 font-semibold my-2  flex text-base ">
                            <CiTimer />
                            <p className='ml-2' >Implementation Time</p>
                        </div>
                        <h1 className="text-gray-500 bg-gray-200 px-2 py-2 rounded-lg">{trl.name}</h1>
                    </div>
                    <div className='' >
                        <div className="text-gray-500 font-semibold my-2  flex text-base ">
                            <BsCashCoin />
                            <p className='ml-2' >Cost</p>
                        </div>
                        <span className="text-gray-500 bg-gray-200 px-2 py-2 rounded-lg">{investmentEffort}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailDisplay
