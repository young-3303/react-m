/**
 * As far as I concerned, the causes could be listed as follows
 * First of All one apparent reason is ....
 * Then ..... should also be responsible for it
 * Moreover some people may blame it to
 * Accordingly, a dozen of measures are supposed be to taken to solve the problem
 * Firstly we shall spare no effort to.....
 * Besides it would be efficient for us to
 * with the effort of all parts concerned, the problem will be solved thoroughly
 * @param array
 * @param cb
 */
export function shuffleArray<T = any>(array: T[], cb: unknown): T[] {
  const arr = array.slice(); // 创建数组的一个拷贝以避免修改原数组
  for (let i = arr.length - 1; i > 0; i--) {
    // 生成一个随机的索引小于当前索引i
    const j = Math.floor(Math.random() * (i + 1));
    // 交换arr[i]和arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
