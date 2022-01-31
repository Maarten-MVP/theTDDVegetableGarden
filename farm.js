const getYieldForPlant = object => object.yield;

const getYieldForCrop = object => object.numCrops * object.crop.yield;

const getTotalYield = (crops) => {

    const yieldArray = crops.crops;

    const totalYiel = yieldArray.map((item) => {
        return getYieldForCrop(item)
    }).reduce((previousValue, currentValue) => {
        return previousValue + currentValue
        });
    return getTotalYield;
}



module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield
};

