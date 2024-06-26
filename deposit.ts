import { CostAverageIntoFreedom } from "./CostAverageIntoFreedom.ts"

setTimeout(async () => {
    const costAverageIntoFreedom = await CostAverageIntoFreedom.getInstance()
    await costAverageIntoFreedom.costAverageIntoFreedom(0, 360)
}, 360)