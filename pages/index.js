import MeetupList from "../components/meetups/MeetupList";

//SEO = search engine optimization

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Vienna_Skyline_%28cropped%29.jpg/1920px-Vienna_Skyline_%28cropped%29.jpg",
    address: "Vienna",
    description: "Let us meet in Vienna",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Budapest_Hungarian_Parliament_%2831363963556%29.jpg/1200px-Budapest_Hungarian_Parliament_%2831363963556%29.jpg",
    address: "Budapest",
    description: "Let us meet in Budapest",
  },
];

function HomePage(props) {

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps(){
  // fetch data from an api
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10 //regenerate the page after *10* seconds
  };
}
// ^^ data is pre-rendered during the build process, not when the page is loaded
// getStaticProps is a reserved name and it should always be used 
// also the props parameter should always be called props

export default HomePage;
