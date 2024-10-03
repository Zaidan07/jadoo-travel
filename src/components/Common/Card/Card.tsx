import React from "react";
import Text from "../Text/Text";

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  variant?: "with-box" | "without-box";
}

const Card: React.FC<CardProps> = ({ title, description, icon, variant = "with-box" }) => {
  return (
    <div className="relative bg-white shadow-md rounded-lg p-4 w-64">
      <div className="mb-4">{icon}</div>
      <Text size="h4" variant="primary" className="font-semibold text-center">{title}</Text>
      <Text size="p" variant="secondary" className="text-center mt-2">{description}</Text>
      
      {variant === "with-box" && (
        <div className="absolute bottom-0 left-0 bg-orange-500 w-12 h-12 rounded-br-lg"></div>
      )}
    </div>
  );
};

export default Card;
