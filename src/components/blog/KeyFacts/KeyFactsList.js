import Cards from "cards/Cards";
import React from "react";
import KeyFactsItem from "./KeyFactsItem";

function KeyFactsList() {
  const packages = [
    {
      _id: 1,
      week: '1 week',

    }
  ]
  return (
    <section className="container key-facts">

      <div>
        <h2 className='text-center'>Key Facts</h2>
        {/* {packeges.map((package) => {
          return <KeyFactsItem package />;
        })} */}
      </div>
    </section>
  );
}

export default KeyFactsList;
