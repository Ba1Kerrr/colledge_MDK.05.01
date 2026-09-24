import Link from "next/link";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-semibold">Мой первый проект на Next.js</h1>
      <p>Выполнил: Балакирев Д., группа ИС-11/9</p>
      <Link href="/about" className="text-blue-600 underline">
        Обо мне
      </Link>
      <div className="flex gap-6 mt-6">
        <Card title="Первая карточка" text="Текст первой карточки" />
        <Card title="Вторая карточка" text="Текст второй карточки, тут написано что-то другое" />
      </div>
    </div>
  );
}
