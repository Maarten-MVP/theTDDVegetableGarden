const getYieldForPlant = crop => crop.yield;

const getYieldForCrop = crop => crop.numCrops * crop.crop.yield;

const getTotalYield = crops => {

    const cropsArray = crops.crops;

    const totalYield = cropsArray
        .map(item => getYieldForCrop(item))
        .reduce((previousValue, currentValue) => previousValue + currentValue);
    return totalYield;
};

const getCostForCrop = crops => {

    const totalYield = getTotalYield(crops);

    const cropCost = crops.crops.map(item => item.crop.cost);
    return totalYield * cropCost;
}

const getRevenueForCrop = crops => {

    const totalYield = getTotalYield(crops);
    const cropPrice = crops.crops.map(item => item.crop.price);
    return totalYield * cropPrice;
}

const getProfitForCrop = crops => getRevenueForCrop(crops) - getCostForCrop(crops);

const getTotalProfit = crops => {

    const cropsArray = crops.crops;

    console.log(cropsArray)

    const totalCost = cropsArray
        .map(item => (getYieldForCrop(item) * item.crop.cost))
        .reduce((previousValue, currentValue) => previousValue + currentValue);
    console.log(totalCost)

    const totalRevenue = cropsArray
        .map (item => (getYieldForCrop(item) * item.crop.price))
        .reduce((previousValue, currentValue) => previousValue + currentValue);
    console.log(totalRevenue)

    return totalRevenue - totalCost;
};

module.exports = {
    getYieldForPlant,
    getYieldForCrop,
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
};

