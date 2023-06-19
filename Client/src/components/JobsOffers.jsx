import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import { useState, useEffect } from "react";
import OffersCards from "./OffersCards";
import CreatePostModal from "./CreatePostModal";


const JobsOffers = () => {
const [showModal, setShowModal] = useState(false)

  //const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllPosts());
  // }, [dispatch]);
  // const posts = useSelector((state) => state.allPosts);
  const [similpostArray, setSimilpostArray] = useState([
    
      {
        id: 1,
        title: "Fron-end Developer (Remote)",
        resume: "As a Front-end Developer, you will be a part of the team that works on the development of the Bitfinex web and mobile applications.",
        description: "As a Front-end Developer, you will be a part of the team that works on the development of the Bitfinex web and mobile applications. This includes: New Features - Bitfinex continuously strives to create innovative new features in order to provide the most professional trading experience for customers. These are developed and deployed using agile methodologies, to ensure the user experience remains the best in the industry. Scalability - The web application must remain effortlessly smooth, responsive, and real-time for customers as the platform continues to scale to accommodate new user growth. Data Visualisation - The data we present to our users is the result of tailored algorithms, on top of the incredible amount of data our platform produces daily, and we continue to experiment with new ways to display this most effectively.",
        companyLogo: "https://images-platform.99static.com//eo3yDt0VIgq0xcftUTfp6KnSrmg=/516x3011:1255x3750/fit-in/590x590/99designs-contests-attachments/66/66702/attachment_66702512",
        interviewerImage: "https://media.licdn.com/dms/image/D4D03AQEDYKxuV3JQmw/profile-displayphoto-shrink_800_800/0/1668954368648?e=2147483647&v=beta&t=JnHxa2ZPUttvVhIkToKtgV9f_7rEH9sRJyPm5oEkpok",
        interviewerName: "Daiana A. Grilla"
      },
      {
        id: 2,
        title: "Full-stack Developer (On-site)",
        resume: "Join our team as a Full-stack Developer and contribute to the development of our web and mobile applications.",
        description: "We are seeking a skilled Full-stack Developer to join our team and work on the development of our web and mobile applications. You will be responsible for both front-end and back-end tasks, collaborating with cross-functional teams to deliver high-quality software solutions. Strong proficiency in JavaScript, HTML, CSS, and experience with frameworks like React and Node.js are required.",
        companyLogo: "https://img.freepik.com/premium-vector/real-estate-business-logo-design-building-property-development-construction-business_624799-6.jpg?w=360",
        interviewerImage: "https://example.com/interviewer2.jpg",
        interviewerName: "John Doe"
      },
      {
        id: 3,
        title: "Backend Developer (Remote)",
        resume: "We are hiring a Backend Developer to join our remote team and contribute to the development of our software solutions.",
        description: "As a Backend Developer, you will work on the server-side development of our software solutions. You will be responsible for designing and implementing scalable APIs, optimizing database performance, and ensuring smooth integration with front-end systems. Strong knowledge of backend technologies, such as Node.js or Django, is required.",
        companyLogo: "https://assets.soyhenry.com/logoOG.png",
        interviewerImage: "https://example.com/interviewer3.jpg",
        interviewerName: "Jane Smith"
      },
      {
        id: 4,
        title: "Front-end Engineer (Full-time)",
        resume: "We are seeking a talented Front-end Engineer to join our team and contribute to the development of our web and mobile applications.",
        description: "As a Front-end Engineer, you will be responsible for implementing user interfaces and collaborating with designers to create intuitive and responsive web applications. You will work closely with the development team to ensure code quality and performance. Proficiency in HTML, CSS, JavaScript, and experience with modern front-end frameworks such as Angular or Vue.js is required.",
        companyLogo: "https://assets.soyhenry.com/logoOG.png",
        interviewerImage: "https://example.com/interviewer4.jpg",
        interviewerName: "Michael Johnson"
      },
      {
        id: 5,
        title: "Mobile App Developer (Remote)",
        resume: "Join our team as a Mobile App Developer and contribute to the development of our iOS and Android applications.",
        description: "We are looking for a skilled Mobile App Developer to join our team and help build cutting-edge iOS and Android applications. You will work on the entire mobile app development lifecycle, from concept to deployment, and collaborate with cross-functional teams to deliver high-quality user experiences. Proficiency in Swift or Kotlin is required.",
        companyLogo: "https://assets.soyhenry.com/logoOG.png",
        interviewerImage: "https://example.com/interviewer5.jpg",
        interviewerName: "Emily Thompson"
      },
      {
        id: 6,
        title: "Software Engineer (Remote)",
        resume: "We are hiring a Software Engineer to join our remote team and contribute to the development of our software solutions.",
        description: "As a Software Engineer, you will work on the design, development, and testing of our software solutions. You will collaborate with cross-functional teams to ensure the successful delivery of high-quality software products. Strong programming skills in languages such as Java, C++, or Python are required.",
        companyLogo: "https://assets.soyhenry.com/logoOG.png",
        interviewerImage: "https://example.com/interviewer6.jpg",
        interviewerName: "David Anderson"
      },
      {
        id: 7,
        title: "UI/UX Designer (Full-time)",
        resume: "Join our team as a UI/UX Designer and contribute to the creation of intuitive and visually appealing web and mobile applications.",
        description: "As a UI/UX Designer, you will work closely with the development team to create user-centric designs for our web and mobile applications. You will conduct user research, create wireframes and prototypes, and collaborate with stakeholders to deliver compelling user experiences. Proficiency in design tools such as Sketch or Figma is required.",
        companyLogo: "https://assets.soyhenry.com/logoOG.png",
        interviewerImage: "https://example.com/interviewer7.jpg",
        interviewerName: "Sophia Lee"
      },
      {
        id: 8,
        title: "DevOps Engineer (Remote)",
        resume: "We are seeking a skilled DevOps Engineer to join our remote team and help streamline our development and deployment processes.",
        description: "As a DevOps Engineer, you will work on automating and optimizing our development, testing, and deployment pipelines. You will collaborate with development and operations teams to ensure smooth and efficient software delivery. Strong knowledge of cloud platforms (e.g., AWS, Azure) and experience with CI/CD tools (e.g., Jenkins, GitLab CI) are required.",
        companyLogo: "https://assets.soyhenry.com/logoOG.png",
        interviewerImage: "https://example.com/interviewer8.jpg",
        interviewerName: "Oliver Martinez"
      },
      {
        id: 9,
        title: "Data Scientist (Full-time)",
        resume: "Join our team as a Data Scientist and contribute to the development of cutting-edge data-driven solutions.",
        description: "As a Data Scientist, you will work on analyzing large datasets, building predictive models, and deriving actionable insights to drive business decisions. You will collaborate with cross-functional teams to develop data-driven solutions and communicate findings to stakeholders. Strong knowledge of statistics, programming languages (e.g., Python, R), and experience with machine learning frameworks (e.g., TensorFlow, PyTorch) are required.",
        companyLogo: "https://assets.soyhenry.com/logoOG.png",
        interviewerImage: "https://example.com/interviewer9.jpg",
        interviewerName: "Sophie Johnson"
      }
    ]);

  const addPost = (newPost) => {
    setSimilpostArray([...similpostArray, newPost]);
  };

  const closeModal = () => {
    setShowModal(!showModal);
  }
   
  


 

  // bg-[url('./src/image/jobsearch.jpg')] bg imagen
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 bg-cover">
      <div className="absolute top-8 right-8">
        <button
          className="bg-blue-200 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md mt-12"
          onClick={() => setShowModal(true)}
        >
          Create Post
        </button>
      </div>
      {showModal && <CreatePostModal addPost={addPost} closeModal={closeModal} />}
      <div className="grid grid-cols-3 gap-5 mt-14 py-4 mx-2">
        {similpostArray.map((post) => (
          <OffersCards key={post.id} post={post} similpostArray={similpostArray} />
        ))}
      </div>
    </div>
  );
};

export default JobsOffers;