import React from "react";
import Image from "next/image";

export default function Card(props) {
  return (
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 mx-4">

        {props.image && (
            <div className="relative">
                <Image src={props.image}></Image>
            </div>
        )}

        <div className="p-6">
            {props.title && (
                <h4 className="mt-4 text-gray-800 cursor-pointer block font-sans text-2xl font-semibold leading-snug tracking-normal antialiased">
                {props.title}
                </h4>
            )}
            {props.desc && (
            <p className="mt-3 block font-sans text-sm font-normal leading-relaxed text-gray-600 antialiased">
            {props.desc}
            </p>
        )}
        </div>

    </div>
  );
}
