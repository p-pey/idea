import debounce from "../../debounce";
import {DependencyList, useMemo} from "../../mock";

export function useDebounce<Args extends unknown[]>(cb: (...args: Args) => void, delay: number, deps: DependencyList) {
  return useMemo(() => debounce(cb, delay), deps);
}

export default useDebounce;
