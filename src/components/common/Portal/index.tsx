import React, { useMemo } from "react";
import { createPortal } from "react-dom";

export interface PortalProps {
  children: React.ReactNode;
  elementId: string;
}

export const Portal: React.FC<PortalProps> = ({ children, elementId }) => {
  const rootElement = useMemo(
    () => document.getElementById(elementId),
    [elementId],
  );

  return createPortal(children, rootElement!);
};
