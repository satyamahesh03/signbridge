import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-6">SignBridge</h1>
      <Link to="/call">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">Start Call</button>
      </Link>
    </div>
  );
}

export default Home;
