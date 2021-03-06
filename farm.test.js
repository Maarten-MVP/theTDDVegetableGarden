const { 
    getYieldForPlant, 
    getYieldForCrop, 
    getTotalYield,
    getCostForCrop,
    getRevenueForCrop,
    getProfitForCrop,
    getTotalProfit,
} = require("./farm");

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
    };

    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, simple", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        expect(getYieldForCrop(input)).toBe(30);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalYield({ crops })).toBe(23);
    });

    test("Calculate total yield with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostForCrop", () => {
    test("Calculate total cost of a crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
        };

        const crops = [{ crop: corn, numCrops: 5 }];
        expect(getCostForCrop({ crops })).toBe(15);
    });
});

describe("getRevenueForCrop", () => {
    test("Calculate total revenue of a crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            price: 3,
        };

        const crops = [{ crop: corn, numCrops: 5 }];
        expect(getRevenueForCrop({ crops })).toBe(45);
    });
});

describe("getProfitForCrop", () => {
    test("Calculate total profit of a crop", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            price: 3,
        };

        const crops = [{ crop: corn, numCrops: 5 }];
        expect(getProfitForCrop({ crops })).toBe(30);
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            price: 3,
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            cost: 1.5,
            price: 4.5,
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        expect(getTotalProfit({ crops })).toBe(54);
    });

    test("Calculate total profit with 0 amount", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            price: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalProfit({ crops })).toBe(0);
    });
});

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
            },
        },
        };
        
    const environmentFactors = {
        sun: "low",
    };

    test("Get yield for plant with 1 environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(15);
    });
});

describe("getYieldForPlant", () => {
    const corn = {
        name: "corn",
        yield: 30,
        factor: {
            sun: {
                low: -50,
                medium: 0,
                high: 50,
            },
            wind: {
                low: -20,
                medium: 0,
                high: 20,
            },
        },
    };
        
        const environmentFactors = {
            sun: "low",
            wind: "high",
        };

    test("Get yield for plant with 2 environment factors", () => {
        expect(getYieldForPlant(corn, environmentFactors)).toBe(18);
    });
});

describe("getYieldForCrop", () => {
    test("Get yield for crop, with factors", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
            },
        };
        const input = {
            crop: corn,
            numCrops: 10,
        };
        const environmentFactors = {
            sun: "low",
            wind: "high",
        };
        expect(getYieldForCrop(input, environmentFactors)).toBe(18);
    });
});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops (with factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            factor: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low",
            wind: "high",
        };
        expect(getTotalYield({ crops }, environmentFactors)).toBe(18.6);
    });

    test("Calculate total yield with 0 amount (with factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        expect(getTotalYield({ crops })).toBe(0);
    });
});

describe("getCostForCrop", () => {
    test("Calculate total cost of a crop (with factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            factor: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
            },
        };
        const environmentFactors = {
            sun: "low",
            wind: "high",
        };
        const crops = [{ crop: corn, numCrops: 5 }];
        expect(getCostForCrop({ crops }, environmentFactors)).toBe(18);
    });
});

describe("getRevenueForCrop", () => {
    test("Calculate total revenue of a crop (with factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            price: 3,
            factor: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
            },
        };
        const environmentFactors = {
            sun: "low",
            wind: "high",
        };

        const crops = [{ crop: corn, numCrops: 5 }];
        expect(getRevenueForCrop({ crops }, environmentFactors)).toBe(54);
    });
});

describe("getProfitForCrop", () => {
    test("Calculate total profit of a crop (with factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            price: 3,
            factor: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
            },
        };
        const environmentFactors = {
            sun: "low",
            wind: "high",
        };

        const crops = [{ crop: corn, numCrops: 5 }];
        expect(getProfitForCrop({ crops }, environmentFactors)).toBe(36);
    });
});

describe("getTotalProfit", () => {
    test("Calculate total profit with multiple crops (with factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            price: 3,
            factor: {
                sun: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                wind: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
            },
        };
        const pumpkin = {
            name: "pumpkin",
            yield: 4,
            cost: 1.5,
            price: 4.5,
            factor: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
            },
        };
        const crops = [
            { crop: corn, numCrops: 5 },
            { crop: pumpkin, numCrops: 2 },
        ];
        const environmentFactors = {
            sun: "low",
            wind: "high",
        };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(46.79999999999999);
    });

    test("Calculate total profit with 0 amount (with factors)", () => {
        const corn = {
            name: "corn",
            yield: 3,
            cost: 1,
            price: 3,
            factor: {
                wind: {
                    low: -50,
                    medium: 0,
                    high: 50,
                },
                sun: {
                    low: -20,
                    medium: 0,
                    high: 20,
                },
            },
        };
        const crops = [{ crop: corn, numCrops: 0 }];
        const environmentFactors = {
            sun: "low",
            wind: "high",
        };
        expect(getTotalProfit({ crops }, environmentFactors)).toBe(0);
    });
});