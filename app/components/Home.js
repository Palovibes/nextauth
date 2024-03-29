// app/components/Home.js
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Learning Platform</h1>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  );
};

export default Home;
