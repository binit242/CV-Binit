import React, { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`border rounded-lg shadow-sm p-4 bg-white ${className || ""}`}>
    {children}
  </div>
);

export const CardHeader: React.FC<{ className?: string }> = ({ children, className }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle: React.FC<{ className?: string }> = ({ children, className }) => (
  <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
);

export const CardContent: React.FC<{ className?: string }> = ({ children, className }) => (
  <div className={`text-gray-600 ${className}`}>{children}</div>
);