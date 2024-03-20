import { UserButton } from "@clerk/nextjs";



const Home = () => {
  const featuredLivestreams = [
    { id: 1, title: "Introduction to JavaScript", image: "/pics/pic1.png", description: "Learn the basics of JavaScript programming language." },
    { id: 2, title: "React Masterclass", image: "/pics/pic2.png", description: "Master React.js framework with advanced concepts and projects." },
    { id: 3, title: "Python for Beginners", image: "/pics/pic3.png", description: "Start your journey into Python programming with this beginner-friendly course." },
    { id: 4, title: "C++ for Beginners", image: "/pics/pic4.png", description: "Start your journey into C++ programming with this beginner-friendly course." },
    { id: 5, title: "Python for Beginners", image: "/pics/pic5.png", description: "Start your journey into Python programming with this beginner-friendly course." },
    { id: 6, title: "Python for Beginners", image: "/pics/pic1.png", description: "Start your journey into Python programming with this beginner-friendly course." },
    { id: 7, title: "Python for Beginners", image: "/pics/pic2.png", description: "Start your journey into Python programming with this beginner-friendly course." },
  ];

  const trendingTopics = [
    { id: 1, title: "Web Development", image: "/pics/live1.png", description: "" },
    { id: 2, title: "Typscript", image: "/pics/live3.png", description: "" },
    { id: 3, title: "SQL", image: "/pics/live2.png", description: "" },
    { id: 4, title: "Full Stack Development", image: "/pics/live4.png", description: "" },
    { id: 5, title: "Data Mining", image: "/pics/live5.png", description: "" },
    { id: 6, title: "Mobile App Development", image: "/pics/live1.png", description: "" },
    { id: 7, title: "Video Game Development", image: "/pics/live2.png", description: "" },
  ];

  const recommendedCategories = [
    { id: 1, title: "Java", image: "/pics/java.png", description: "Learn the basics of Java programming language."},
    { id: 2, title: "Python", image: "/pics/python.png", description: "Learn the basics of Python programming language" },
    { id: 3, title: "PHP", image: "/pics/php.png", description: "Learn the basics of PHP programming language" },
    { id: 4, title: "Ruby", image: "/pics/ruby.png", description: "Everything you want to know about Ruby!" },
    { id: 5, title: "C++", image: "/pics/c++.png", description: "Follow this comprehensive track to kickstart your career with c++." },
    { id: 6, title: "SQL", image: "/pics/sql.png", description: "Everything you want to know about SQL!" },
    { id: 7, title: "Dart", image: "/pics/dart.png", description: "Learn the basics of Dart programming language" },

  
  ];

  
  
  const cardStyle = {
    minWidth: '250px', 
    maxWidth: '250px', 
    backgroundColor: 'white',
    borderRadius: '0.5rem', 
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', 
    padding: '1rem', 
  };


  return (
<div className="flex flex-col min-h-screen w-full px-4 py-8" style={{ backgroundColor: '#0D1520' }}>
      <header className="flex justify-between items-center mb-8">
        <UserButton /><UserButton></UserButton>
      </header>

   
      <div className="mb-8">
  <h2 className="text-xl font-semibold mb-4 text-white">Featured Live Streams</h2>
  <div className="flex overflow-x-auto space-x-4" style={{ width: '100%', flexShrink: 0 }}>
    {featuredLivestreams.map((livestream) => (
      <div key={livestream.id} className="flex-none bg-white rounded-lg shadow-md p-4" style={{ minWidth: '250px', maxWidth: '250px' }}>
        <img src={livestream.image} alt={livestream.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h3 className="text-lg font-semibold mb-2">{livestream.title}</h3>
        <p className="text-gray-600">{livestream.description}</p>
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