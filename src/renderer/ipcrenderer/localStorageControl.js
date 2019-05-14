/**
 * localStorage 的 操作类
 */


import fs from 'fs'
class local {
    constructor() {}
    // 打开软件加载 配置文件到 localstorage 中
    initLocalStorageFromConfigFile(callback) {
        fs.read('./localStorageStore.json', function (err, data) {
            if (!data || err) {
                localStorage.clear()
                callback()
                return
            }
            this.setFilePaths(data.filePaths)
            this.setFileChangeFlog(data.fileChangeFlog)
            this.setNowFilePath(data.nowFilePath)
            callback()
        })
    }
    //关闭文件吧 localstorage 保存到配置文件中
    initWriteStorageFromConfigFile(callback) {
        fs.writeFile('./localStorageStore.json', `[
           { filePaths:${this.getFilePaths()}},
            {fileChangeFlog:${this.getFileChangeFlog()}},
           { nowFilePath:${this.getNowFilePath()}}
        ]`, 'utf8', function (err) {
            if (err) return //提示错误
            callback()
        })
    }
    setFilePaths(filePaths, callback) {
        if (!filePaths) return false
        let files = this.getFilePaths()
        if (files && files.length > 0) {
            files = files.reverse()
            let newFilePaths = Array.from(new Set(files.concat(Array.from(filePaths))))
            if (newFilePaths.length > 30) {
                newFilePaths = newFilePaths.slice(-30, -1).reverse()

            } else {
                newFilePaths = newFilePaths.reverse()

            }
            localStorage.setItem('filePaths', JSON.stringify(newFilePaths))
        } else {
            if (filePaths.length > 30) filePaths = filePaths.slice(0, 29)
            localStorage.setItem('filePaths', JSON.stringify(filePaths))
        }
        callback()
    }
    getFilePaths() {
        if (!localStorage.getItem('filePaths')) return undefined
        else return JSON.parse(localStorage.getItem('filePaths'))



    }
    setNowFilePath(nowFilePath, callback) {
        if (!nowFilePath) {
            // 如果没有则返回false   然后前面做提示
            return false
        }
        localStorage.setItem('nowFilePath', nowFilePath)
        callback()
    }
    getNowFilePath() {

        return localStorage.getItem('nowFilePath')
    }
    setFileChangeFlog(FileChangeFlog, callback) {
        if (!FileChangeFlog) {
            localStorage.setItem('FileChangeFlog', false)
            return
        }
        localStorage.setItem('FileChangeFlog', FileChangeFlog)
        callback()
    }
    getFileChangeFlog() {

        return localStorage.getItem('FileChangeFlog')
    }
}


export default new local()