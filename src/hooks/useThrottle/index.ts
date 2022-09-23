import {DependencyList, useMemo} from "../../mock";
import throttle from "../../throttle";

export function useThrottle<Args extends unknown[]>(
  cb: (...args: Args) => void,
  cooldown: number,
  deps: DependencyList
) {
  return useMemo(() => throttle(cb, cooldown), deps);
}

export default useThrottle;
