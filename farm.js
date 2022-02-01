
const getYieldForPlant = (crop, factors) => {
    if(factors != null) {

        const cropKeys = Object.keys(crop.factor);

        const factorValuesTotal = [];

        cropKeys.forEach(i  => {
            const factorLevel = factors[i];     
            cropsLevels = crop.factor[i];
            factorValuesTotal.push(cropsLevels[factorLevel]);
        })

        let cropYield = crop.yield;

        for(let i = 0; i < factorValuesTotal.length; i++) {
            let result = cropYield * ((factorValuesTotal[i]+100))/100;
            cropYield = result;
        }
        return cropYield;

    } else {
        return crop.yield;
    }
};

const getYieldForCrop = (crop, factors) => {
    if(factors != null) {

        return crop.numCrops * getYieldForPlant(crop.crop, factors);

    } else {
        return crop.numCrops * crop.crop.yield;
    }
};

const getTotalYield = (crops, factors)  => {
    if(factors != null) {

        const cropsArray = crops.crops;

        const totalYield = cropsArray
            .map(item => getYieldForCrop(item, factors))
            .reduce((previousValue, currentValue) => previousValue + currentValue);
        return totalYield;

    } else {

        const cropsArray = crops.crops;

        const totalYield = cropsArray
            .map(item => getYieldForCrop(item))
            .reduce((previousValue, currentValue) => previousValue + currentValue);
        return totalYield;
    }
};

const getCostForCrop = (crops, factors) => {
    if(factors != null) {
        
        const totalYield = getTotalYield(crops, factors);

        const cropCost = crops.crops.map(item => item.crop.cost);
        return totalYield * cropCost;  
    
    } else {
      
    const totalYield = getTotalYield(crops);

    const cropCost = crops.crops.map(item => item.crop.cost);
    return totalYield * cropCost;  
    }
}

const getRevenueForCrop = (crops, factors)  => {
    if(factors != null) {

        const totalYield = getTotalYield(crops, factors);
        const cropPrice = crops.crops.map(item => item.crop.price);
        return totalYield * cropPrice;

    } else {
        
        const totalYield = getTotalYield(crops);
        const cropPrice = crops.crops.map(item => item.crop.price);
        return totalYield * cropPrice;  
    }
}

const getProfitForCrop = (crops, factors) => {
    if(factors != null) {
        return getRevenueForCrop(crops, factors) - getCostForCrop(crops, factors)
    } else {
        return getRevenueForCrop(crops) - getCostForCrop(crops)
    }
};

const getTotalProfit = (crops, factors) => {
    if(factors != null) {

        const cropsArray = crops.crops;

        const totalCost = cropsArray
            .map(item => (getYieldForCrop(item, factors) * item.crop.cost))
            .reduce((previousValue, currentValue) => previousValue + currentValue);
    
        const totalRevenue = cropsArray
            .map (item => (getYieldForCrop(item, factors) * item.crop.price))
            .reduce((previousValue, currentValue) => previousValue + currentValue);
    
        return totalRevenue - totalCost; 

    } else {

        const cropsArray = crops.crops;

        const totalCost = cropsArray
            .map(item => (getYieldForCrop(item) * item.crop.cost))
            .reduce((previousValue, currentValue) => previousValue + currentValue);
    
        const totalRevenue = cropsArray
            .map (item => (getYieldForCrop(item) * item.crop.price))
            .reduce((previousValue, currentValue) => previousValue + currentValue);
    
        return totalRevenue - totalCost;

    }
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

