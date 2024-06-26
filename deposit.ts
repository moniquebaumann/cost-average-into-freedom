import { CostAverageIntoFreedom } from "./CostAverageIntoFreedom.ts"

setTimeout(async () => {
    // console.log(Deno.args[0])
    const costAverageIntoFreedom = await CostAverageIntoFreedom.getInstance()
    await costAverageIntoFreedom.costAverageIntoFreedom(Deno.args[0], Deno.args[1], Deno.args[2], Deno.args[3])
}, 360)