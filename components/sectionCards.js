import React from "react";
import Card from "./card";
import Container from "./container";




export default function SectionCards(props) {
    const { data } = props;
  return (
    
    <div
      className="flex w-full flex-col p-12 bg-white">
    <div>
        <section className="px-6 xl:px-0">
            <div className="mx-auto container">
                <div className="flex items-center justify-center w-full">
                    <div className="">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                            <>
                                {data.cards.map((item, index) => (
                                <Card title={item.title} desc={item.desc} image={item.image} key={index}></Card>
                                ))}
                            </>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>

    </div>
  );
}
