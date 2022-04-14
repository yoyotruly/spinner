const spinner = (numOfRuns) => {
  let positions = ['\r| ', '\r/ ', '\r- ', '\r\\ ']

  for (let n = 0; n <= numOfRuns; n++)
  setTimeout(() => {
    for (let i = 0; i < positions.length; i++) {
      setTimeout(() => {
        process.stdout.write(positions[i]);
      }, 200 + i * 200)
    }
  }, n * 800)
}

spinner(5);