import { Hero } from "../../components";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <div className="py-3">
        <Hero user={user} logout={logout} />
      </div>
    </div>
  );
};

export default Home;
