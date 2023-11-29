import MeetupDetail from "../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Vienna_Skyline_%28cropped%29.jpg/1920px-Vienna_Skyline_%28cropped%29.jpg"
      title="First meetup"
      address="Vienna"
      description="Let us meet in Vienna"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false, //false if we described all dynamic values [meetupId]
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: { meetupId },
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Vienna_Skyline_%28cropped%29.jpg/1920px-Vienna_Skyline_%28cropped%29.jpg",
        title: "First meetup",
        address: "Vienna",
        description: "Let us meet in Vienna",
      },
    },
  };
}

export default MeetupDetails;
