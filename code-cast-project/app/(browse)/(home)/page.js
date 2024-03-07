import { UserButton } from "@clerk/nextjs";



const Home = () => {
  const featuredCourses = [
    { id: 1, title: "Introduction to JavaScript", image: "javascript.jpg", description: "Learn the basics of JavaScript programming language." },
    { id: 2, title: "React Masterclass", image: "react.jpg", description: "Master React.js framework with advanced concepts and projects." },
    { id: 3, title: "Python for Beginners", image: "python.jpg", description: "Start your journey into Python programming with this beginner-friendly course." },
    { id: 4, title: "C++ for Beginners", image: "C++.jpg", description: "Start your journey into C++ programming with this beginner-friendly course." },
    { id: 5, title: "Python for Beginners", image: "python.jpg", description: "Start your journey into Python programming with this beginner-friendly course." },
    { id: 6, title: "Python for Beginners", image: "python.jpg", description: "Start your journey into Python programming with this beginner-friendly course." },
    { id: 7, title: "Python for Beginners", image: "python.jpg", description: "Start your journey into Python programming with this beginner-friendly course." },
  ];

  const trendingTopics = [
    { id: 1, title: "Web Development", image: "webdev.jpg", description: "" },
    { id: 2, title: "Data Science", image: "datascience.jpg", description: "" },
    { id: 3, title: "Mobile App Development", image: "mobiledev.jpg", description: "" },
    { id: 4, title: "Mobile App Development", image: "mobiledev.jpg", description: "" },
    { id: 5, title: "Mobile App Development", image: "mobiledev.jpg", description: "" },
    { id: 6, title: "Mobile App Development", image: "mobiledev.jpg", description: "" },
    { id: 7, title: "Mobile App Development", image: "mobiledev.jpg", description: "" },
  ];

  const recommendedCategories = [
    { id: 1, title: "Full Stack Web Development", image: "fullstack.jpg", description: "Become a full-stack web developer by mastering front-end and back-end technologies." },
    { id: 2, title: "Data Science Career Path", image: "datasciencepath.jpg", description: "Follow this comprehensive track to kickstart your career in data science." },
    { id: 3, title: "Mobile App Development with React Native", image: "reactnative.jpg", description: "Learn how to build cross-platform mobile apps using React Native framework." },
    { id: 4, title: "Mobile App Development with React Native", image: "reactnative.jpg", description: "Learn how to build cross-platform mobile apps using React Native framework." },
    { id: 5, title: "Mobile App Development with React Native", image: "reactnative.jpg", description: "Learn how to build cross-platform mobile apps using React Native framework." },
    { id: 6, title: "Mobile App Development with React Native", image: "reactnative.jpg", description: "Learn how to build cross-platform mobile apps using React Native framework." },
    { id: 7, title: "Mobile App Development with React Native", image: "reactnative.jpg", description: "Learn how to build cross-platform mobile apps using React Native framework." },
  ];

  return (
<div className="flex flex-col min-h-screen w-full px-4 py-8" style={{ backgroundColor: '#0D1520' }}>
      <header className="flex justify-between items-center mb-8">
        <UserButton /><UserButton></UserButton>
      </header>

   
      <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Featured Courses</h2>
        <div className="flex overflow-x-auto space-x-4">
          {featuredCourses.map((course) => (
            <div key={course.id} className="min-w-[250px] bg-white rounded-lg shadow-md p-4">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </div>
          ))}
        </div>
      </div>

    
      <div className="mb-8">
        
      <h2 className="text-xl font-semibold mb-4 text-white">Trending Topics</h2>
        <div className="flex overflow-x-auto space-x-4">
          {trendingTopics.map((topic) => (
            <div key={topic.id} className="min-w-[250px] bg-white rounded-lg shadow-md p-4">
              <img src={topic.image} alt={topic.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-white">Recommended Categories</h2>
        <div className="flex overflow-x-auto space-x-4">
          {recommendedCategories.map((category) => (
            <div key={category.id} className="min-w-[250px] bg-white rounded-lg shadow-md p-4">
              <img src={category.image} alt={category.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;