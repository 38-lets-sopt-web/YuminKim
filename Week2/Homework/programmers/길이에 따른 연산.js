function solution(num_list) {
  if (num_list.length >= 11) {
    // 합
    return num_list.reduce((sum, n) => sum + n, 0);
  } else {
    // 곱
    return num_list.reduce((mul, n) => mul * n, 1);
  }
}
