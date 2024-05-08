import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div className="bg-background min-h-screen">
      <div className="flex items-center justify-center h-screen">
        <Link
          to="/creator"
          className="bg-slate-500 p-4 rounded-lg text-white font-bold"
        >
          CREATE CV
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
