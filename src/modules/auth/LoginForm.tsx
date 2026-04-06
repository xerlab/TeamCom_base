import { useState } from "react";
import { useNavigate } from "react-router-dom";

const QUICK_ACCOUNTS = [
  {
    label: "Demo",
    email: "demo@teamcom.io",
    password: "demo1234",
    color: "bg-violet-50 hover:bg-violet-100 text-violet-700 border-violet-200",
    dot: "bg-violet-400",
  },
  {
    label: "Admin",
    email: "admin@teamcom.io",
    password: "admin1234",
    color: "bg-amber-50 hover:bg-amber-100 text-amber-700 border-amber-200",
    dot: "bg-amber-400",
  },
] as const;

const LoginForm = ({ onSwitch }: { onSwitch: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeQuick, setActiveQuick] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    localStorage.setItem("token", btoa(`${email}:${password}`));
    navigate("/");
  };

  const fillAccount = (acc: (typeof QUICK_ACCOUNTS)[number]) => {
    setEmail(acc.email);
    setPassword(acc.password);
    setShowPassword(false);
    setActiveQuick(acc.label);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
        <p className="text-sm text-gray-500 mt-1">Sign in to your TeamCom account</p>
      </div>

      {/* Quick login */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Quick access</p>
        <div className="flex gap-2">
          {QUICK_ACCOUNTS.map((acc) => (
            <button
              key={acc.label}
              type="button"
              onClick={() => fillAccount(acc)}
              className={`flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-all duration-150 ${acc.color} ${activeQuick === acc.label ? "ring-2 ring-offset-1 ring-current" : ""}`}
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${acc.dot}`} />
              <span>{acc.label}</span>
              <span className="ml-auto text-xs opacity-60 font-mono truncate">{acc.email.split("@")[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or sign in manually</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
        />
      </div>

      {/* Password */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <button
            type="button"
            className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Forgot password?
          </button>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 pr-11 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white py-3 rounded-xl font-semibold text-sm transition-all duration-150 shadow-sm shadow-indigo-200 mt-2"
      >
        Sign in
      </button>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <p className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-indigo-600 hover:text-indigo-700 font-semibold"
        >
          Create one for free
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
