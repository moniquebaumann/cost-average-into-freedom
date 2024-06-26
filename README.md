# Cost Average Into Freedom
🦕 module to cost average into [FreedomCash.org](https://FreedomCash.org).

## Usage Example

Please always experiment with very small amounts first.

### Deposit
```sh
deno run --allow-all https://deno.land/x/cost_average_into_freedom/deposit.ts
```

### Accumulate
```sh
deno run --allow-all https://deno.land/x/cost_average_into_freedom/accumulate.ts
```

### Accumulate in Background
```sh
pm2 start -n "accumulate" --interpreter="deno" --interpreter-args="run --allow-net --allow-env" https://deno.land/x/cost_average_into_freedom/accumulate.ts
```

## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
