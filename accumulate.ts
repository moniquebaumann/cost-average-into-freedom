import { CostAverageIntoFreedom } from "./CostAverageIntoFreedom.ts"

setTimeout(async () => {
    const costAverageIntoFreedom = await CostAverageIntoFreedom.getInstance()
    await costAverageIntoFreedom.costAverageIntoFreedom(Deno.args[0], Deno.args[1])
}, 360)