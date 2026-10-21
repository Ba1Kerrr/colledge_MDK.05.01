import Link from "next/link"

const posts = [
  { id: "1", title: "Первый пост" },
  { id: "2", title: "Второй пост" },
  { id: "3", title: "Третий пост" },
]

export default function PostsPage() {
  return (
    <ul className="divide-y divide-gray-200">
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} className="hover:text-blue-600 hover:underline py-2">{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
