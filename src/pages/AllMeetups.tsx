import React from 'react';

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [loadedMeeups, setLoadedMeetups] = React.useState<any[]>([]);

  React.useEffect(() => {
    setIsLoading(true);
    fetch("https://react-course-538a6-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json").then(response => {
      return response.json();
    }).then(data => {
      const meetups: any[] = [];
      for(const key in data) {
        const meetup = {id: key, ...data[key]};
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);

  if(isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }
  
  return <section>
    <h1>All Meetups Page</h1>
    <MeetupList meetups={loadedMeeups} />
  </section>
}

export default AllMeetupsPage;