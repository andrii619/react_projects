import MeetupList from "../components/meetups/MeetupList";

import { MongoClient } from "mongodb";

const MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Florence_Duomo_from_Michelangelo_hill.jpg",
    address: "Some Address",
    description: "meetup description",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Florence_Duomo_from_Michelangelo_hill.jpg",
    address: "Some Address",
    description: "meetup description",
  },
  {
    id: "m3",
    title: "Third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/77/Florence_Duomo_from_Michelangelo_hill.jpg",
    address: "Some Address",
    description: "meetup description",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // never gets executed on client side
  // gets executed during build process

  // for example prefetch data using an api

  const client = await MongoClient.connect(
    "mongodb+srv://andrii619:LearningReact@cluster0.s5geg.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          description: meetup.description,
          image: meetup.image,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 1
  };
}

export default HomePage;
