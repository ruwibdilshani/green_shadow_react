export class Log {
    logCode: string
    cropDate: string
    observedImage: string
    logDate: string
    logDetail: string
    param : {
        fieldCode: string
        cropCode: string
        staffId: string
    }

    constructor(logCode: string, cropDate: string, observedImage: string, logDate: string, logDetail: string, param: { fieldCode: string, cropCode: string, staffId: string }) {
        this.logCode = logCode
        this.cropDate = cropDate
        this.observedImage = observedImage
        this.logDate = logDate
        this.logDetail = logDetail
        this.param = param
    }
}