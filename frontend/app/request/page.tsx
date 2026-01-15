"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import AddPage from "@/components/add";
import { useState } from "react";

export default function UserRequestPage() {
    const [showAddPage, setShowAddPage] = useState(false);

    return (
        <>
            <Navbar />

            <div className="flex items-start">
                <Image
                    src="/user.webp"
                    alt="Request Page"
                    width={100}
                    height={100}
                    className="mx-5 mt-10"
                />

                <div className="flex flex-col ml-4">
                    <h2 className="text-2xl font-bold mt-10">Нэр:</h2>
                    <h2 className="text-2xl font-bold">Хөтөлбөр:</h2>
                    <h2 className="text-2xl font-bold">Голч:</h2>
                </div>

                <div className="flex justify-center mt-10 ml-20">
                    <h2 className="text-2xl font-bold">Ур чадвар:</h2>
                </div>

                <Image
                    src="/addButton.svg"
                    alt="Add"
                    width={30}
                    height={30}
                    className="mx-5 mt-10 cursor-pointer"
                    onClick={() => setShowAddPage(!showAddPage)}
                />
            </div>

            {showAddPage && <AddPage />}
        </>
    );
}
