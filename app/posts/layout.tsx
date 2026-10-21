export default function PostsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="bg-gray-900 text-white p-6 mb-6">
        <h1>Блог</h1>
      </header>
      {children}
    </div>
  )
}
