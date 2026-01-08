
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  
  // Early Return pattern
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li><Link to = "/" > 🏠︎ Home</Link></li>
        <li> 🎬 Shorts</li>
        <li> 🎞️ Videos</li>
        <li> 🔴 Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li> 🎵 Music</li>
        <li> 🏆 Sports</li>
        <li> 🎮 Gaming</li>
        <li> 🎥 Movies</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li> 🕒 History</li>
        <li> ▶️ Playlists</li>
        <li> ⏳ Watch later</li>
        <li> 👍 Liked videos</li>
        <li> ⬇️ Downloads</li>
        <li> 📚 Courses</li>
      </ul>
    </div>
  );
};

export default Sidebar;