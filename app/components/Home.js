// app/components/Home.js
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Test your NextAuth skills</h1>
      <Link href="/login">
        <a>Login</a>
      </Link>
    </div>
  );
};

export default Home;
