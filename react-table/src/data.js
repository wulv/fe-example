const randomId = () => Math.random().toString(36).substring(2);
const randomPv = (n = 10) => Math.random()*n | 0;

export const dataGenerate = () => {
  return {
    item_id: randomId(),
    bro_uvpv: `${randomPv()}/${randomPv()}`,
    stock_num: randomPv(1000),
    sold_num: randomPv()
  }
}
export const datasets = new Array(5).fill(0).map(() => dataGenerate());