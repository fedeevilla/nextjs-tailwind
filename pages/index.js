import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <div className="py-20">
        <p className="text-center">Hi, there! This is just for fun & learn!</p>
        <div className="flex justify-center m-auto mt-8 mb-12 cursor-pointer w-36 bg-gray-30 rounded-xl">
          <Link href="/users">
            <a>Go to users</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
