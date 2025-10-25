"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = ({ delayDuration = 0, ...props }) => (
  <TooltipPrimitive.Root delayDuration={delayDuration} {...props} />
);
Tooltip.displayName = TooltipPrimitive.Tooltip.displayName;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(
  (
    {
      className,
      sideOffset = 4,
      transition = { type: "spring", stiffness: 300, damping: 25 },
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <AnimatePresence>
        {isOpen && (
          <TooltipPrimitive.Portal forceMount>
            <TooltipPrimitive.Content
              ref={ref}
              sideOffset={sideOffset}
              onPointerDownOutside={() => setIsOpen(false)}
              asChild
              {...props}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={transition}
                className={cn(
                  "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
                  className
                )}
              >
                {props.children}
              </motion.div>
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        )}
      </AnimatePresence>
    );
  }
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// Custom hook to manage tooltip state
const useTooltipState = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return { isOpen, setIsOpen };
};

// Updated TooltipContent with proper state management
const TooltipContentWithState = React.forwardRef(
  (
    {
      className,
      sideOffset = 4,
      transition = { type: "spring", stiffness: 300, damping: 25 },
      ...props
    },
    ref
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        asChild
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={transition}
          className={cn(
            "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
            className
          )}
        >
          {props.children}
        </motion.div>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
);
TooltipContentWithState.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContentWithState as TooltipContent, TooltipProvider };

