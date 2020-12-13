import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import PostCard from "../../components/postCard";

export default function User({ user }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () =>
    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);

  useEffect(() => {
    fetchData().then((res) => {
      setLoading(true);
      res.json().then((res) => {
        setPosts(res);
        setLoading(false);
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>User #{user.id}</title>
      </Head>
      <div>
        <div className="w-36 m-auto flex justify-center mt-2 mb-12 bg-gray-30 rounded-xl cursor-pointer">
          <Link href="/users">
            <a>Back to users</a>
          </Link>
        </div>
        <h1 className="text-2xl text-center text-black">{user.name}</h1>
        <h4 className="text-base text-center text-black">{user.email}</h4>
        <h4 className="text-base text-center text-black">
          {user.company.name}
        </h4>
        <h4 className="text-xl mt-6 text-center text-black">
          Posts: {posts.length}
        </h4>
        {!loading ? (
          <div className="grid grid-template-columns gap-x-6 p-16">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <h4 className="text-xl mt-6 text-center text-black">Loading</h4>
        )}
        <style jsx>{`
          .grid-template-columns {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        `}</style>
      </div>
    </>
  );
}

User.getInitialProps = async (context) => {
  try {
    const user = await (
      await fetch(
        `https://jsonplaceholder.typicode.com/users/${context.query.id}`
      )
    ).json();

    return { user };
  } catch (error) {}
};
