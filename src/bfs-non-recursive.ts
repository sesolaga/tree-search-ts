import type { NodaValue, Noda } from './types.js';

export function isInTreeUsingNonRecursiveBfs<T extends NodaValue>(
  root: Noda<T>,
  val: T
) {
  const queue: Noda<T>[] = [root];
  let head = 0;

  while (head < queue.length) {
    const node = queue[head]!;

    if (node.val === val) {
      return true;
    }

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }

    ++head;
  }

  return false;
}

/**
 * This implementation is not optimal because of `queue.shift()`
 * which has time complexity O(k) where k = current array length.
 * So, overall this algorithm implementation can degrade to O(n²).
 * This is a language-level cost, not an algorithmic flaw.
 * Use the version with the `head` instead.
 */
export function SLOW_isInTreeUsingNonRecursiveBfs<T extends NodaValue>(
  root: Noda<T>,
  val: T
): boolean {
  const queue: Noda<T>[] = [root];

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (node.val === val) {
      return true;
    }

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return false;
}