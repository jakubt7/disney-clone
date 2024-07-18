import disney from "./../assets/images/disney.png";
import marvel from "./../assets/images/marvel.png";
import national from "./../assets/images/nationalG.png";
import pixar from "./../assets/images/pixar.png";
import starwars from "./../assets/images/starwars.png";

import disneyVid from "./../assets/videos/disney.mp4";
import marvelVid from "./../assets/videos/marvel.mp4";
import nationalVid from "./../assets/videos/national-geographic.mp4";
import pixarVid from "./../assets/videos/pixar.mp4";
import starwarsVid from "./../assets/videos/star-wars.mp4";

const Featured: React.FC = () => {
  const featuredList = [
    { id: 1, image: disney, video: disneyVid },
    { id: 2, image: marvel, video: marvelVid },
    { id: 3, image: national, video: nationalVid },
    { id: 4, image: pixar, video: pixarVid },
    { id: 5, image: starwars, video: starwarsVid },
  ];

  return (
    <div className="flex gap-5 p-2 md:px-16 px-5">
      {featuredList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-600  rounded-lg hover:scale-110 transition-all duration-300 ease-out cursor-pointer relative shadow-xl shadow-black"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 left-0 w-full h-full rounded-md z-0 opacity-0 hover:opacity-50 object-cover"
          />
          <img src={item.image} className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
};

export default Featured;
