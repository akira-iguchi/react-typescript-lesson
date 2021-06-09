export default function primitiveSample() {
  let name = null
  console.log('null1:', typeof name, name) // nullの型はobjectになる

  name = undefined
  console.log('undefined1:', typeof name, name) // undefinedの型はundefinedになる

  // !name = nameが存在しない（null, undefined）
  if (!name) {
    console.log('undefined2:', '名前はまだ', name)
  } else {
    console.log('undefined2:', '名前は', name)
  }
  // 結果：名前はまだ undefined
}

// 123 = トイレットペーパーの紙がある
// 0 = 紙がない
// null = 芯もない
// undefined = トイレットペーパーのホルダーもない = 何も存在しない（定義すらされていない）

// undefinedを使う!!!!
