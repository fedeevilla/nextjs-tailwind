import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import PostCard from "../../components/postCard";
export default function User({ user }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Client-Side Rendering
    const fetchData = async () =>
      await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
      );

    fetchData()
      .then((res) => {
        res
          .json()
          .then((res) => {
            setPosts(res);
            setLoading(false);
          })
          .catch(() => setLoading(false));
      })
      .catch(() => setLoading(false));
  }, [user.id]);

  return (
    <>
      {!user.name ? (
        <h1 className="mt-12 text-2xl text-center text-black">
          User does not found!
        </h1>
      ) : (
        <>
          <Head>
            <title>User #{user.id}</title>
          </Head>
          <div>
            <div className="flex justify-center m-auto mt-2 mb-12 cursor-pointer w-36 bg-gray-30 rounded-xl">
              <Link href="/users">
                <a>Back to users</a>
              </Link>
            </div>
            <h1 className="text-2xl text-center text-black">{user.name}</h1>
            <h4 className="text-base text-center text-black">{user.email}</h4>
            <h4 className="text-base text-center text-black">
              {user.company.name}
            </h4>
            {!loading ? (
              <>
                <h4 className="mt-6 text-xl text-center text-black">
                  Posts: {posts.length}
                </h4>

                <div className="grid p-16 grid-template-columns gap-x-6">
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </>
            ) : (
              <h4 className="mt-6 text-xl text-center text-black">
                Loading Posts..
              </h4>
            )}
            <style jsx>{`
              .grid-template-columns {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              }
            `}</style>
          </div>
        </>
      )}
    </>
  );
}

User.getInitialProps = async (context) => {
  const user = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/users/${context.query.id}`
    )
  ).json();

  return { user };
};
