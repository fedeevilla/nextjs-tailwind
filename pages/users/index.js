import UserCard from "../../components/userCard";
import Link from "next/link";
import Head from "next/head";

export default function Users({ users }) {
  return (
    <div>
      <Head>
        <title>Users</title>
      </Head>
      <div className="grid grid-template-columns gap-x-6 p-16">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <a>
              <UserCard user={user} />
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .grid-template-columns {
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
      `}</style>
    </div>
  );
}

Users.getInitialProps = async (context) => {
  try {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    return { users };
  } catch (error) {}
};
