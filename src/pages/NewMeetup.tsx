import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData: any) {
    fetch("https://react-course-538a6-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': "application/json"
      }
    }).then(() => {
      history.replace("/");
    })
  }
  return <section>
    <h1>New Meetup Page</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </section>
}

export default NewMeetupPage;