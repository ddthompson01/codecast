"use client"

import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { useSidebar } from './sidebar/use-sidebar';

function Container({ children }) {
  const { collapsed, onCollapse, onExpand } = useSidebar();
  const isMobile = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    if (isMobile) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [isMobile, onCollapse, onExpand]);

  const marginLeftClass = collapsed ? 'ml-[70px]' : 'ml-[70px] lg:ml-[280px]';

  return <div className={`flex-1 ${marginLeftClass}`}>{children}</div>;
}

export default Container;
