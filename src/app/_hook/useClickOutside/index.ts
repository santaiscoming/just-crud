import { useRouter } from 'next/navigation';
import { RefObject, useEffect } from 'react';

interface UseOutsideClickProps {
  (ref: RefObject<HTMLElement>, callback: () => void): typeof useRouter;
}

export const useOutsideClick = (ref: RefObject<HTMLElement>) => {
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      event.stopPropagation();
      const clickedElement = event.target as HTMLElement;

      if (
        !!clickedElement &&
        clickedElement.className === ref.current?.className
      ) {
        router.back();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};
