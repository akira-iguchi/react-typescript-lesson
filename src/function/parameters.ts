// オプションパラメーターを持つ関数
export const isUserSignedIn1 = (userId: string, userName?: string) => {
  if (userId === 'ABC') {
    console.log('signedIn userName', userName)
    return true
  } else {
    console.log('not signedIn')
    return false
  }
}

//デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, userName = 'NO NAME') => {
  if (userId === 'ABC') {
    console.log('signedIn userName', userName)
    return true
  } else {
    console.log('not signedIn')
    return false
  }
}
