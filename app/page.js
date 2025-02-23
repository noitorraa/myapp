"use client";
import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Input from "./Components/Input";
import Button from "./Components/Button";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  // Хранение значений логина и пароля в состоянии компонента
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Функция проверки введённых данных
  const handleLogin = () => {
    // Если логин и пароль соответствуют заданным константам, перенаправляем пользователя
    if (login === "Admin" && password === "pswrd") {
      router.push("/contentPage"); 
    } else {
      alert("Неверные данные!");
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header с названием колледжа */}
      <Header title="НАТК им. Галущака" />

      {/* Основное содержимое – форма авторизации */}
      <div className="flex flex-grow items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white rounded shadow">
          {/* Поле ввода для логина */}
          <div className="mb-4">
            <Input
              type="text"
              placeholder="Логин"
              onChange={(e) => setLogin(e.target.value)}
              bgColor="bg-gray-50"
              textColor="text-gray-900"
              className="w-full"
            />
          </div>
          {/* Поле ввода для пароля */}
          <div className="mb-4">
            <Input
              type="password"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
              bgColor="bg-gray-50"
              textColor="text-gray-900"
              className="w-full"
            />
          </div>
          {/* Кнопка входа */}
          <Button
            text="Войти"
            onClick={handleLogin}
            bgColor="bg-blue-500"
            textColor="text-white"
            className="w-full"
          />
        </div>
      </div>
      {/* Footer с названием колледжа */}
      <Footer />
    </div>
  );
};

export default AuthPage;
