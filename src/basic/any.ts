export default function anySample() {
  let name: any = 'akira'
  console.log('any1:', typeof name, name)

  name = 20
  console.log('any2:', typeof name, name) // エラーにならずにnumber,28

  const maybeName: unknown = 'akira'
  console.log('unknown1:', typeof maybeName, maybeName) // 'akira'によってstringに

  const isFoo = maybeName === 200
  console.log('unknown2:', typeof isFoo, isFoo) // boolean, false
}

// any = どんな型でも許容（メタモン）= 全く安全ではない
//unknown = どんな方になるか不明。代入した値によって方が変化（イーブイ）
