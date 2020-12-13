export default function PostCard({ post }) {
  return (
    <div className="bg-gray-30 shadow-lg rounded-lg my-4 overflow-hidden">
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold text-gray-800">{post.title}</h1>
        <p className="py-2 text-lg text-gray-700">{post.body}</p>
      </div>
    </div>
  );
}
