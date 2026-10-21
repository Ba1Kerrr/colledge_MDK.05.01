import Link from "next/link";
import Card from "@/components/Card";

// bg-${color}-500 не работает, tailwind не видит такой класс при сборке
// поэтому делаю словарь с полными названиями классов
const color = "purple"
const colors = {
  purple: "bg-purple-500",
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-semibold">Мой первый проект на Next.js</h1>
      <p>Выполнил: Давыдов Д., группа ИС-21/9</p>
      <Link href="/about" className="text-blue-600 underline">Обо мне</Link>
      <Link href="/posts" className="bg-brand text-white px-5 py-2 rounded-lg">Перейти в блог</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        <Card title="Первая карточка" text="Текст первой карточки" />
        <Card title="Вторая карточка" text="Текст второй карточки, тут написано что-то другое" />
        <Card title="Третья карточка" text="Ещё одна карточка, чтобы было видно как сетка перестраивается" />
      </div>

      <div className={`${colors[color]} text-white px-3 py-1 rounded mt-6`}>purple</div>
    </div>
  )
}
