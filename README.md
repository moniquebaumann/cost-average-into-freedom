# Cost Average Into Freedom
🦕 module to cost average into [FreedomCash.org](https://FreedomCash.org).

Please always experiment with very small amounts first.  

Please understand the parameters and choose values which are best for you.  

## Usage Examples

### Deposit
```sh
deno run --allow-all https://deno.land/x/cost_average_into_freedom/deposit.ts 0 360 
```

### Accumulate
```sh
deno run --allow-all https://deno.land/x/cost_average_into_freedom/accumulate.ts 1000 0
```

### Accumulate in Background
```sh
git clone https://github.com/moniquebaumann/cost-average-into-freedom.git
```

```sh
pm2 start -n "accumulate" --interpreter="deno" --interpreter-args="run --allow-net --allow-env" accumulate.ts -- 1000 0
```

## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
