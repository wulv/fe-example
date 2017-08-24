const randomId = () => Math.random().toString(36).substring(2);
const randomPv = (n = 10) => Math.random()*n | 0;

export const dataGenerate = () => {
  return {
    name: randomId(),
    age: randomPv(100),
    height: randomPv(1000),
    width: randomPv(100),
    hobby: {
      movie: {
        name: randomId(),
        director: randomId()
      }
    }
  }
}
export const datasets = new Array(5).fill(0).map(() => dataGenerate());