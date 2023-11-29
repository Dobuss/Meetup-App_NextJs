import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Vienna_Skyline_%28cropped%29.jpg/1920px-Vienna_Skyline_%28cropped%29.jpg",
    address: "Vienna",
    description: "Let us meet in Vienna",
  },
  {
    id: "m2",
    title: "Second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Budapest_Hungarian_Parliament_%2831363963556%29.jpg/1200px-Budapest_Hungarian_Parliament_%2831363963556%29.jpg",
    address: "Budapest",
    description: "Let us meet in Budapest",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
