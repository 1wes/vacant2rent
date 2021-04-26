import React from "react";
import UpdateItem from "./UpdateItem";
import AdsItem from "./AdsItem";
import foto from "../../../assets/team-3-800x800.jpg";
function UpdateList() {
  const updates = [
    {
      _id: 1,
      title: "what you need to know about furnshed",
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
    <section className="container latest-post" >
      <div className='inner'>
        <h2 >Latest Updates</h2>
        <div className='row'>
          {updates.map((item, index) => {
            if (item._id < 3) {
              return <UpdateItem key={index} update={item} />;
            }
          })}
        </div>
        <div className='ads row'>
        {updates.map((item, index) => {
            if (item._id <= 3) {
              return <AdsItem key={index} update={item} />;
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default UpdateList;
