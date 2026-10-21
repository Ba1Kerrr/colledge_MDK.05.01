import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 shadow-sm">
      <span className="text-xl font-bold w-[137px]">Мой блог</span>
      <div className="flex gap-4">
        <Link href="/" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded">Главная</Link>
        <Link href="/posts" className="hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded">Блог</Link>
      </div>
    </nav>
  )
}
