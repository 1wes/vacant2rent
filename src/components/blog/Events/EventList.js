import React from "react";

import foto from "../../../assets/house-1.jpg";
import EventItem from "./EventItem";

function EventList() {
  const Events = [
    {
      _id: 1,
      title: "what you need to know",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, non. Molestiae animi voluptate odio cumque quos nam excepturi vel reprehenderit aliquid quaerat, laudantium ratione aperiam! Eaque deleniti blanditiis sunt accusantium doloribus aut corrupti repellendus omnis rem adipisci dolorem qui assumenda sapiente, tempore expedita, in aliquid recusandae quisquam repellat dolore incidunt?",
      imageUrl: foto,
    },
    {
      _id: 2,
      title: "Covid-19 Protocols",
      detail:
        "Eaque deleniti blanditiis sunt accusantium doloribus aut corrupti repellendus omnis rem adipisci dolorem qui assumenda sapiente, tempore expedita, in aliquid recusandae quisquam repellat dolore incidunt? Eaque deleniti blanditiis sunt accusantium doloribus aut corrupti repellendus omnis rem adipisci dolorem qui assumenda sapiente, tempore expedita, in aliquid recusandae quisquam repellat dolore incidunt?",
      imageUrl: foto,
    },
    {
      _id: 3,
      title: "how i became a blogger",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, non. Molestiae animi voluptate odio cumque quos nam excepturi vel reprehenderit aliquid quaerat, laudantium ratione aperiam!",
      imageUrl: foto,
    },
    {
      _id: 4,
      title: "Build financila systems in a day",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, non. Molestiae animi voluptate odio cumque quos nam excepturi vel reprehenderit aliquid quaerat, laudantium ratione aperiam!",
      imageUrl: foto,
    },
    {
      _id: 5,
      title: "hustle finally paid off",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, non. Molestiae animi voluptate odio cumque quos nam excepturi vel reprehenderit aliquid quaerat, laudantium ratione aperiam!",
      imageUrl: foto,
    },
  ];

  return (
    <section className="container latest-events" >
      <div className='inner'>
        <h2 className='text-center mb-5'>Latest Events</h2>
        <div className='row justify-content-between'>
          {Events.map((item, index) => {
            if (item._id < 5) {
              return <EventItem key={index} event={item} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default EventList;
