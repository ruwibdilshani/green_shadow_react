export class Crop {
    cropCode: string;
    cropName: string;
    cropScientificName: string;
    cropSeason: string;
    cropType: string;
    cropImage: string;

    constructor(cropCode: string, cropName: string, cropScientificName: string, cropSeason: string, cropType: string, cropImage: string) {
        this.cropCode = cropCode;
        this.cropName = cropName;
        this.cropScientificName = cropScientificName;
        this.cropSeason = cropSeason;
        this.cropType = cropType;
        this.cropImage = cropImage;
    }
}