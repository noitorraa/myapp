"use client";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useRouter } from "next/navigation";

// Дополнения: темная/светлая тема, приветствие по времени суток, доступность, микро-взаимодействия
const AuthPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [greeting, setGreeting] = useState("");
  const router = useRouter();

  // Определяем приветствие по времени суток
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Доброе утро");
    else if (hour < 18) setGreeting("Добрый день");
    else setGreeting("Добрый вечер");
  }, []);

  const handleLogin = () => {
    if (login === "Admin" && password === "pswrd") {
      router.push("/contentPage");
    } else {
      alert("Неверные данные!");
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} flex flex-col min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 font-poppins transition-colors duration-500`}>      
      {/* Тема и приветствие в Header */}
      <Header title={greeting ? `${greeting}, Админ!` : "НАТК им. Галущака"} className="text-white drop-shadow-lg flex justify-between items-center">
        <button 
          aria-label="Переключить тему" 
          onClick={() => setDarkMode(!darkMode)} 
          className="p-2 bg-white/30 dark:bg-gray-800 rounded-full transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </Header>

      <div className="flex flex-grow items-center justify-center px-4 md:px-0">
        <div className="w-full max-w-lg p-8 bg-white/30 dark:bg-gray-900/50 backdrop-filter backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-700 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6 drop-shadow-md dark:text-gray-100">
            Вход в личный кабинет
          </h2>

          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <div className="mb-5">
              <Input
                id="login"
                type="text"
                placeholder="Логин"
                onChange={(e) => setLogin(e.target.value)}
                aria-label="Поле ввода логина"
                className="w-full px-4 py-2 bg-white/70 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <div className="mb-6">
              <Input
                id="password"
                type="password"
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Поле ввода пароля"
                className="w-full px-4 py-2 bg-white/70 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            <Button
              type="submit"
              text="Войти"
              aria-label="Кнопка входа"
              className="w-full py-3 font-medium rounded-xl shadow-lg transform transition hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              bgColor="bg-gradient-to-r from-pink-400 to-purple-600 dark:from-gray-700 dark:to-gray-900"
              textColor="text-white"
            />
          </form>
        </div>
      </div>

      <Footer className="text-white text-center py-4 opacity-80 dark:text-gray-300" />
    </div>
  );
};

export default AuthPage;
