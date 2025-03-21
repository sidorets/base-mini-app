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
    <div 
      className="safe-area-container bg-gray-900 text-white min-h-screen flex flex-col items-start justify-start"
      style={{
        paddingTop: "var(--tg-content-safe-area-inset-top)",
        paddingBottom: "var(--tg-content-safe-area-inset-bottom)",
        paddingLeft: "var(--tg-content-safe-area-inset-left)",
        paddingRight: "var(--tg-content-safe-area-inset-right)"
      }}
    >
      <h1 className="text-3xl font-medium">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>
      <h1 className="text-3xl font-bold">Привет, Emma! 🚀</h1>

      <p className="text-gray-300">Контент теперь не залезает под UI Telegram.</p>
    </div>
  );
}