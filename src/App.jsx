import { useEffect } from "react";
import {
  viewportContentSafeAreaInsets,
  onViewportChanged
} from "@telegram-apps/sdk";

export default function App() {

  const [insets, setInsets] = useState({
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  });

  // Telegram SDK
  useEffect(() => {
    const updateInsets = () => {
      const safe = viewportContentSafeAreaInsets();
      setInsets(safe);
    };

    updateInsets(); // начальная установка
    onViewportChanged(updateInsets); // автообновление при изменении
    
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
      <div className="bg-gray-900 text-white min-h-screen flex flex-col items-start justify-center p-4"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        minHeight: "100vh",
        boxSizing: "border-box",
        overflow: "auto",
      }}>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <h1 className="text-3xl font-bold">Some content 🚀</h1>
        <p className="mt-2 text-gray-300">Mini App теперь использует content-container.</p>
    </div>
  );
}