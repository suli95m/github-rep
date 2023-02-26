function solution(input, markers) {
  let res = ''
  const newarr = []
  const formatInput = input.trim()
  const arr = formatInput.split('\')
  for (let i = 0; i < arr.length; i++) {
    res = ''
    for (let k = 0; !arr[i][k].includes(markers); k++) {
        res += arr[i][k]
    }
    newarr.push(res)
  }
  return newarr.join('\')
};