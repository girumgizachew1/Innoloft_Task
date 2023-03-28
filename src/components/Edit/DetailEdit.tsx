import React from 'react'
import { GiHorseHead } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { BsCashCoin } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";

interface DetailDisplayProps {
    data: {
        trl: { id: number, name: string },
        investmentEffort: string,
        type: { id: number, name: string },
        businessModels: { id: number, name: string }[]
    }
}

function DetailDisplay({ data }: DetailDisplayProps) {
    const { trl, investmentEffort, businessModels } = data;

    return (
        <div className="w-full h-full bg-white flex flex-col rounded-lg shadow-sm px-2 ">
            <h1 className="text-gray-600 text-base font-semibold px-4 pt-4 h-20">Edit Offer detail</h1>

        </div>
    )
}

export default DetailDisplay
