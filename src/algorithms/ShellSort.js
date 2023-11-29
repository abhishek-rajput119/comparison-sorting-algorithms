const ShellSort = (blocks) => {
  const dupBlocks = blocks.slice() // copying blocks array
  const order = []

  const n = dupBlocks.length

  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i += 1) {
      const temp = dupBlocks[i]

      let j
      for (j = i; j >= gap && dupBlocks[j - gap] > temp; j -= gap) {
        order.push([j - gap, j, null, null]) // Compare

        dupBlocks[j] = dupBlocks[j - gap]
        order.push([j - gap, j, dupBlocks.slice(), null]) // Swap
      }

      dupBlocks[j] = temp
      order.push([j, i, dupBlocks.slice(), null]) // Swap
    }
  }

  return order
}

export default ShellSort
