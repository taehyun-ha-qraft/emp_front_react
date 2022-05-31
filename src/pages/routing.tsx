import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

export function useInternalRouter() {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: RoutePath) {
        navigate(path);
      },
    };
  }, [navigate]);
}

// type RoutePath = 'example' | '/main' | '/login' | '/parents' | `/parents/${string}`;
type RoutePath = '/login' | '/list' | `/list/${string}`;
