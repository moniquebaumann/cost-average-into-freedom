import { Logger, sleep, ethers } from "./deps.ts"
import { CA, getLogger, getProvider, getContract, Freiheit, Friede, Geld } from "./helper.ts"

export class CostAverageIntoFreedom {

    public static instance

    public static async getInstance(): Promise<CostAverageIntoFreedom> {
        if (CostAverageIntoFreedom.instance === undefined) {
            const logger = await getLogger()
            const provider = getProvider(logger)
            const costAverageIntoFreedomC = await getContract(CA,
                provider,
                "./cost-average-into-freedom-abi.json")
            CostAverageIntoFreedom.instance =
                new CostAverageIntoFreedom(logger, provider, costAverageIntoFreedomC)
        }
        return CostAverageIntoFreedom.instance
    }

    private logger: Logger
    private provider: any
    private costAverageIntoFreedomC: any
    private sender: any
    private assetRocks = true

    protected constructor(logger: Logger, provider: any, costAverageIntoFreedomC: any) {
        this.logger = logger
        this.provider = provider
        this.costAverageIntoFreedomC = costAverageIntoFreedomC
    }

    public async costAverageIntoFreedom(intervalInSeconds: number, deposit: boolean) {

        await this.prepareSender()

        let tx

        if (deposit) {

            const perPurchasePerRecipientAmount = BigInt(6 * 10 ** 18)
            const amount = BigInt(3) * perPurchasePerRecipientAmount
            tx = await this.costAverageIntoFreedomC.deposit(intervalInSeconds, perPurchasePerRecipientAmount, Freiheit, [this.sender], { value: amount })
            this.logger.info(`deposit for Freiheit tx: ${tx.hash}`)
            await tx.wait()
            tx = await this.costAverageIntoFreedomC.deposit(intervalInSeconds, perPurchasePerRecipientAmount, Friede, [this.sender], { value: amount })
            this.logger.info(`deposit for Friede tx: ${tx.hash}`)
            await tx.wait()
            tx = await this.costAverageIntoFreedomC.deposit(intervalInSeconds, perPurchasePerRecipientAmount, Geld, [this.sender], { value: amount })
            this.logger.info(`deposit for Geo Cash tx: ${tx.hash}`)
            await tx.wait()

        } else {

            while (this.assetRocks) {
                const depositIDs = await this.costAverageIntoFreedomC.getDepositIDs()
                this.logger.info(`depositIDs: ${depositIDs}`)
                for (const id of depositIDs) {
                    try {
                        const deposit = await this.costAverageIntoFreedomC.deposits(id)
                        // this.logger.info(deposit)
                        const input = deposit[1]
                        const swapped = deposit[3]
                        this.logger.info(input)
                        this.logger.info(swapped)
                        if (input > swapped) {
                            tx = await this.costAverageIntoFreedomC.trigger(id, 10000, 1)
                            this.logger.info(`trigger tx: ${tx.hash}`)
                            await tx.wait()
                        }
                    } catch (error) {
                        this.logger.info("frei")
                    }
                }
                await sleep(intervalInSeconds)
            }

        }
    }

    private async prepareSender() {
        if (this.sender === undefined) {
            const configuration = JSON.parse(Deno.readTextFileSync('./.env.json'))
            const wallet = new ethers.Wallet(configuration.pkTestWallet, this.provider)
            const signer = await wallet.connect(this.provider)
            this.sender = await signer.getAddress()
            console.log(this.sender)
        }
    }
}