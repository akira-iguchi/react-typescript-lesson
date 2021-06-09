// アロー関数
export const logMessage = (message: string): void => {
  console.log('function basic1:', message)
}

// 名前付き関数
export function logMessage2(message: string): void {
  console.log('function basic2:', message)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log('function basic3:', message)
}

// アロー関数の省略記法
export const logMessage4 = (message: string): void => console.log('function basic1:', message)

export const throwError = (message: string) => {
  throw new Error(message)
}

// 呼び出し呼び出しシグネチャ（省略記法）
type LogMessage = (message: string) => void
export const LogMessage6: LogMessage = (message) => {
  console.log('signedIn userName', message)
}
