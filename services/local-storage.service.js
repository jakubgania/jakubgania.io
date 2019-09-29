export default class LocalStorage {
  checkIfDataExistsInLocalStorageByKey(key) {
    // return localStorage.getItem(key) !== null ? true : false
    return localStorage.getItem(key) !== null
  }

  updateDataByKey(key, value) {
    let dataArray = []
    dataArray = JSON.parse(localStorage.getItem(key))
    dataArray.push(value)
    localStorage.setItem(key, JSON.stringify(dataArray))
  }

  setDataByKey(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  deleteDataFromLocalStorageByKey(key) {
    localStorage.removeItem(key)
  }

  checkConfirmationRules() {
    return !this.checkIfDataExistsInLocalStorageByKey('confirmation')
  }
}
