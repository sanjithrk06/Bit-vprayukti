import { useEffect, useState } from "react";

export default function App() {
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [dotRotation, setDotRotation] = useState(0);
  const [text, setText] = useState("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const secs = new Date().getSeconds();

      const currentLoadingPercent = 440 - 440 * (secs / 60);
      setLoadingPercent(currentLoadingPercent);

      const currentDotRotation = 360 * (secs / 60);
      setDotRotation(currentDotRotation);

      setText(secs >= 10 ? secs : `0${secs}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="relative transform scale-200">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl">{text}</div>
        <div className="absolute w-4 h-4 bg-blue-500 rounded-full" style={{transform: `rotate(${dotRotation}deg)`}}></div>
        <svg className="w-24 h-24">
          <circle className="text-gray-600" cx="12" cy="12" r="10" strokeWidth="2" fill="transparent" />
          <circle className="text-blue-500" cx="12" cy="12" r="10" strokeWidth="2" fill="transparent" strokeDasharray="440" style={{ strokeDashoffset: loadingPercent }} />
        </svg>
      </div>
    </div>
  );
}
