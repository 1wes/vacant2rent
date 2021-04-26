
import Banner from "components/blog/Banner";
import EventList from "components/blog/Events/EventList";
import AppLayout from "components/Layouts/AppLayout";
import UpdateList from "components/blog/Updates/UpdateList";
import React from "react";
import KeyFactsList from "components/blog/KeyFacts/KeyFactsList";

function Blog() {
  return (
    <AppLayout>
      <Banner />
      <UpdateList />
      <EventList />
      {/* <KeyFactsList /> */}
    </AppLayout>
  );
}

export default Blog;
