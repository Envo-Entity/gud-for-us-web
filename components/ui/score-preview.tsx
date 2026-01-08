"use client";

import React, { useEffect, useState } from "react";
import Globe from "./globe";

interface ScorePreviewProps {
  score: number;
  maxScore?: number;
  icon: "health" | "compatibility" | "environment";
  className?: string;
  animateOnMount?: boolean;
}

const ScorePreview: React.FC<ScorePreviewProps> = ({
  score,
  maxScore = 100,
  icon,
  className = "",
  animateOnMount = true,
}) => {
  const [animatedScore, setAnimatedScore] = useState(
    animateOnMount ? 0 : score
  );
  const [animatedWidth, setAnimatedWidth] = useState(
    animateOnMount ? 0 : (score / maxScore) * 100
  );
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple visibility trigger for animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!animateOnMount || !isVisible) return;

    const duration = 1500;
    const steps = 60;
    const increment = score / steps;
    const widthIncrement = ((score / maxScore) * 100) / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setAnimatedScore(score);
        setAnimatedWidth((score / maxScore) * 100);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.round(increment * currentStep));
        setAnimatedWidth(widthIncrement * currentStep);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [score, maxScore, animateOnMount, isVisible]);

  // Calculate gradient color based on score
  const getGradientColor = () => {
    const percentage = (animatedScore / maxScore) * 100;
    if (percentage < 40) {
      return "linear-gradient(90deg, #ef4444 0%, #f97316 100%)";
    } else if (percentage < 70) {
      return "linear-gradient(90deg, #f97316 0%, #eab308 100%)";
    } else {
      return "linear-gradient(90deg, #22c55e 0%, #16a34a 100%)";
    }
  };

  const renderIcon = () => {
    switch (icon) {
      case "health":
        return (
          <img
            src="/app-images/heart.png"
            alt="Health"
            className="w-12 h-12 object-contain"
          />
        );
      case "compatibility":
        return (
          <img
            src="/app-images/compatibility.png"
            alt="Compatibility"
            className="w-12 h-12 object-contain"
          />
        );
      case "environment":
        return (
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-sm">
            <Globe size={48} className="!h-12" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl p-4 shadow-lg border border-gray-100 ${className}`}
      style={{
        background: "linear-gradient(145deg, #ffffff 0%, #fafafa 100%)",
      }}
    >
      <div className="flex items-center gap-4">
        {/* Icon */}
        {renderIcon()}

        {/* Score and Progress */}
        <div className="flex-1">
          {/* Score Value */}
          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-2xl font-bold text-gray-900">
              {animatedScore}
            </span>
            <span className="text-sm text-gray-400">/ {maxScore}</span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${animatedWidth}%`,
                background: getGradientColor(),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorePreview;
