import React from "react";
import { isPropertySignature } from "typescript";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props: any) {
  const titleInputRef = React.useRef<HTMLInputElement | null>(null);
  const imageInputRef = React.useRef<HTMLInputElement | null>(null);
  const addressInputRef = React.useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = React.useRef<HTMLTextAreaElement | null>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current?.value;
    const enteredImage = imageInputRef.current?.value;
    const enteredAddress = addressInputRef.current?.value;
    const enteredDescription = descriptionInputRef.current?.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription
    }
    
    props.onAddMeetup(meetupData);
  }
  return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Meetup Tile</label>
        <input type="text" id="title" ref={titleInputRef} required />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" id="image" ref={imageInputRef} required />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} required />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea id="description" ref={descriptionInputRef} rows={5} required></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </Card>
}

export default NewMeetupForm;