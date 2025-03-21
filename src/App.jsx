import { useEffect } from "react";

export default function App() {

  // Telegram SDK
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      tg.expand();
      tg.disableVerticalSwipes();

      // Check if Telegram is Open
      const isTelegram = tg.initDataUnsafe?.query_id !== undefined;

      if (isTelegram) {
      console.log("Running inside Telegram WebApp");
      tg.requestFullscreen(); // Only isinde Telegram
      } else {
      console.log("Running in a regular browser. Fullscreen is disabled.");
      }
    }
  }, []);

  // App Interface
  return (
    <div className="content-container">
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
        <p className="mt-2 text-gray-300">Mini App теперь использует content-container.</p>
      </div>
    </div>
  );
}