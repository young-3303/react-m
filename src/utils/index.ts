export function shuffleArray<T = any>(array: T[]): T[] {
  const arr = array.slice(); // 创建数组的一个拷贝以避免修改原数组
  for (let i = arr.length - 1; i > 0; i--) {
    // 生成一个随机的索引小于当前索引i
    const j = Math.floor(Math.random() * (i + 1));
    // 交换arr[i]和arr[j]
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
