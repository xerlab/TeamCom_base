import { useState } from "react";
import AuthLayout from "./AuthLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AuthLayout>
      {/* Tab switcher */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            isLogin
              ? "bg-white shadow-sm text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Sign in
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
            !isLogin
              ? "bg-white shadow-sm text-indigo-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Create account
        </button>
      </div>

      {isLogin ? (
        <LoginForm onSwitch={() => setIsLogin(false)} />
      ) : (
        <RegisterForm onSwitch={() => setIsLogin(true)} />
      )}
    </AuthLayout>
  );
};

export default AuthPage;
