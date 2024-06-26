import { CostAverageIntoFreedom } from "./CostAverageIntoFreedom.ts"

setTimeout(async () => {
    const costAverageIntoFreedom = await CostAverageIntoFreedom.getInstance()
    await costAverageIntoFreedom.costAverageIntoFreedom(1000, 0)
}, 360)