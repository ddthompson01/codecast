import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from '/components/ui/tooltip';
  
  function SideBarMessage({ label, children, asChild, side, align }) {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
          <TooltipContent className="text-black bg-white" side={side} align={align}>
            <p className="font-semibold">{label}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
  
  export default SideBarMessage;
  