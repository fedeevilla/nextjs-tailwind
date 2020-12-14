export default function PostCard({ post }) {
  return (
    <div className="my-4 overflow-hidden rounded-lg shadow-lg bg-gray-30">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-800">{post.title}</h1>
        <p className="py-2 text-lg text-gray-700">{post.body}</p>
      </div>
    </div>
  );
}
