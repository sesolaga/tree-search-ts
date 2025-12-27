import type { NodaValue, Noda } from './types.js';

export function isInTreeUsingNonRecusiveDfs<T extends NodaValue>(root: Noda<T>, val: T): boolean {
  const stack: Noda<T>[] = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;

    if (node.val === val) {
      return true;
    }

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return false;
}