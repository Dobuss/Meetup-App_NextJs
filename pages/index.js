import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";

//SEO = search engine optimization

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

/* export async function getServerSideProps(context){
  // runs on the server after deployment, not during build; runs for every incoming request

  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
} */

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:CGwNProC1E4Go3vA@cluster0.r12ivel.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, //regenerate the page after *10* seconds
  };
}
// ^^ data is pre-rendered during the build process, not when the page is loaded
// getStaticProps is a reserved name and it should always be used
// also the props parameter should always be called props

export default HomePage;
