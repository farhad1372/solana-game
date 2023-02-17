
const state = {
  queries: {
    "game-1": {
      result: null,
      sql: `with t1 as
      (
      select 
      TX_ID, date_trunc('day',BLOCK_TIMESTAMP) as date,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game 
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      )
      
      select 
      count(case when game='Star Atlas' then 1 else null end) as Star_Atlas,
      count(case when game='Genopets' then 1 else null end) as Genopets,
      count(case when game='Aurory' then 1 else null end) as Aurory,
      date 
      from t1 
      group by date  
      order by date asc`
    },
    "game-1-1": {
      result: null,
      sql: `with t1 as
      (
      select 
      SIGNERS[0] as users, 
        CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game , min(BLOCK_TIMESTAMP) as date
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      
      group by 1,2 )
      , cici as
      (select 
      count(*) as number , date_trunc('day',date) as datee ,
      count(case when game='Star Atlas' then 1 else null end) as Star_Atlas ,
      count(case when game='Genopets' then 1 else null end) as Genopets,
        count(case when game='Aurory' then 1 else null end) as Aurory , 
        sum(Star_Atlas) over (order by datee) as cStar_Atlas,
        sum(Genopets) over (order by datee) as cGenopets,
        sum(Aurory) over (order by datee) as cAurory
      from t1
      group by 2)
      
      
      select *
      from cici 
      order by datee asc
      `
    },
    "game-1-2": {
      result: null,
      sql: `select count(*) as number , type , date from
      ((select 
        INNER_INSTRUCTION['instructions'][0]['parsed']['type'] as type,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date
      
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and game='Star Atlas' and type is not null
        
        )
      
      union all
      
      
      (select 
        INNER_INSTRUCTION['instructions'][1]['parsed']['type'] as type,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date
      
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and game='Star Atlas' and type is not null
        
        )
      
        union all
      
      (select 
        INNER_INSTRUCTION['instructions'][2]['parsed']['type'] as type,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date
      
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and game='Star Atlas' and type is not null
        
        ))
      group by 2,3 order by date asc
      `
    },
    "game-1-3": {
      result: null,
      sql: `select count(*) as number , type , date from
      ((select 
        INNER_INSTRUCTION['instructions'][0]['parsed']['type'] as type,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date
      
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and game='Star Atlas' and type is not null
        
        )
      
      union all
      
      
      (select 
        INNER_INSTRUCTION['instructions'][1]['parsed']['type'] as type,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date
      
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and game='Star Atlas' and type is not null
        
        )
      
        union all
      
      (select 
        INNER_INSTRUCTION['instructions'][2]['parsed']['type'] as type,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date
      
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and game='Star Atlas' and type is not null
        
        ))
      group by 2,3
      
        `
    },
    "game-2-1": {
      result: null,
      sql: `with t1 as
      (
      select 
      TX_ID, date_trunc('day',BLOCK_TIMESTAMP) as date,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game 
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      )
      
      select 
      count(case when game='Star Atlas' then 1 else null end) as Star_Atlas,
      count(case when game='Genopets' then 1 else null end) as Genopets,
      count(case when game='Aurory' then 1 else null end) as Aurory,
      date 
      from t1 
      group by date  
      order by date asc`
    },
    "game-2-2": {
      result: null,
      sql: `select count(*) as number , type , date from
      ((select 
        INNER_INSTRUCTION['instructions'][0]['parsed']['type'] as type,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date
      
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and game='Genopets' and type is not null
        
        )
      
      union all
      
      
      (select 
        INNER_INSTRUCTION['instructions'][1]['parsed']['type'] as type,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date
      
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and game='Genopets' and type is not null
        
        )
      
        union all
      
      (select 
        INNER_INSTRUCTION['instructions'][2]['parsed']['type'] as type,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date
      
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and game='Genopets' and type is not null
        
        ))
      group by 2,3
        order by date asc
        `
    },
    "game-2-3": {
      result: null,
      sql: `with t1 as
      (
      select 
      SIGNERS[0] as users, 
        CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game , min(BLOCK_TIMESTAMP) as date
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      
      group by 1,2 )
      , cici as
      (select 
      count(*) as number , date_trunc('day',date) as datee ,
      count(case when game='Star Atlas' then 1 else null end) as Star_Atlas ,
      count(case when game='Genopets' then 1 else null end) as Genopets,
        count(case when game='Aurory' then 1 else null end) as Aurory , 
        sum(Star_Atlas) over (order by datee) as cStar_Atlas,
        sum(Genopets) over (order by datee) as cGenopets,
        sum(Aurory) over (order by datee) as cAurory
      from t1
      group by 2)
      
      
      select *
      from cici 
      order by datee asc
      `
    },
    "game-3-1": {
      result: null,
      sql: `with t1 as
      (
      select 
      TX_ID, date_trunc('day',BLOCK_TIMESTAMP) as date,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game 
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      )
      
      select 
      count(case when game='Star Atlas' then 1 else null end) as Star_Atlas,
      count(case when game='Genopets' then 1 else null end) as Genopets,
      count(case when game='Aurory' then 1 else null end) as Aurory,
      date 
      from t1 
      group by date  
      order by date asc`
    },
    "game-3-2": {
      result: null,
      sql: `select count(*) as number , type , date from
((select 
  INNER_INSTRUCTION['instructions'][0]['parsed']['type'] as type,
CASE
when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date

from 
  solana.core.fact_events

where 
PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
  'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
  'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
  ) and game='Aurory' and type is not null
  
  )

union all


(select 
  INNER_INSTRUCTION['instructions'][1]['parsed']['type'] as type,
CASE
when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date

from 
  solana.core.fact_events

where 
PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
  'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
  'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
  ) and game='Aurory' and type is not null
  
  )

  union all

(select 
  INNER_INSTRUCTION['instructions'][2]['parsed']['type'] as type,
CASE
when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
end as game ,  date_trunc('day',BLOCK_TIMESTAMP) as date

from 
  solana.core.fact_events

where 
PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
  'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
  'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
  ) and game='Aurory' and type is not null
  
  ))
group by 2,3 order by date asc`
    },
    "game-3-3": {
      result: null,
      sql: `with t1 as
      (
      select 
      SIGNERS[0] as users, 
        CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game , min(BLOCK_TIMESTAMP) as date
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      
      group by 1,2 )
      , cici as
      (select 
      count(*) as number , date_trunc('day',date) as datee ,
      count(case when game='Star Atlas' then 1 else null end) as Star_Atlas ,
      count(case when game='Genopets' then 1 else null end) as Genopets,
        count(case when game='Aurory' then 1 else null end) as Aurory , 
        sum(Star_Atlas) over (order by datee) as cStar_Atlas,
        sum(Genopets) over (order by datee) as cGenopets,
        sum(Aurory) over (order by datee) as cAurory
      from t1
      group by 2)
      
      
      select *
      from cici 
      order by datee asc
      `
    },
    "game-3-4": {
      result: null,
      sql: `with mint as 
      (select 
       INNER_INSTRUCTION['instructions'][0]['parsed']['info']['mint'] as mint ,
         INNER_INSTRUCTION['instructions'][0]['parsed']['info']['amount'] as amount,
        date_trunc('day',BLOCK_TIMESTAMP) as date , tx_id,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game 
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and INNER_INSTRUCTION['instructions'][0]['parsed']['type']='mintTo')
      
      
      select sum(case when MINT='xAURp5XmAG7772mfkSy6vRAjGK9JofYjc3dmQDWdVDP' then  AMOUNT/1e9 else AMOUNT end) as volume , MINT   from mint a left join solana.core.dim_labels b on a.mint=b.address 
        where 
        LABEL_TYPE is null and game='Aurory' and AMOUNT>2
      
      group by 2
      order by 1 desc
      `
    },
    "game-3-5": {
      result: null,
      sql: `with mint as 
      (select 
       INNER_INSTRUCTION['instructions'][0]['parsed']['info']['mint'] as mint ,
         INNER_INSTRUCTION['instructions'][0]['parsed']['info']['amount'] as amount,
        date_trunc('day',BLOCK_TIMESTAMP) as date , tx_id,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game 
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        ) and INNER_INSTRUCTION['instructions'][0]['parsed']['type']='burn')
      
      
      select sum(AMOUNT/1e9) as volume , MINT   from mint a left join solana.core.dim_labels b on a.mint=b.address 
        where 
        LABEL_TYPE is null and game='Aurory' and AMOUNT>2
      
      group by 2
      order by 1 desc
      
      
      `
    },
    "compare-1": {
      result: null,
      sql: `
      select 
        count(distinct TX_ID) as number, date_trunc('day',BLOCK_TIMESTAMP) as date,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game 
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      
      group by 2,3
      order by date asc`
    },
    "compare-2": {
      result: null,
      sql: `
      select 
        count(distinct TX_ID) as number, date_trunc('day',BLOCK_TIMESTAMP) as date,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game 
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      
      group by 2,3
      order by date asc`
    },
    "compare-3": {
      result: null,
      sql: `with t1 as
      (
      select 
      SIGNERS[0] as users, 
        CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game , min(BLOCK_TIMESTAMP) as date
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      
      group by 1,2 )
      , cici as
      (select 
      count(*) as number , date_trunc('day',date) as datee ,GAME 
      from t1
      group by 2,3)
      
      
      select *, sum(number) over (  PARTITION BY GAME order by datee) as c_number
      from cici 
      `
    },
    "compare-4": {
      result: null,
      sql: `select count(*) as number , 
      PROPOSAL_ID 
      from 
      terra.core.fact_governance_votes
        group by 2
      order by 1 asc`
    },
    "compare-5": {
      result: null,
      sql: `with t1 as
      (
      select 
      SIGNERS[0] as users, 
        CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game , min(BLOCK_TIMESTAMP) as date
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      
      group by 1,2 )
      , cici as
      (select 
      count(*) as number , date_trunc('day',date) as datee ,GAME 
      from t1
      group by 2,3)
      
      
      select *, sum(number) over (  PARTITION BY GAME order by datee) as c_number
      from cici 
      `
    },
    "compare-6": {
      result: null,
      sql: `with t1 AS
      (select 
      SIGNERS[0] as userr , 
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      )
      , t2 as
      (select 
      userr, 
      count(distinct game) as number 
      from 
      t1 
      group by 1)
      
      select count(*) as numberr , number as games_number
      from t2 
      group by 2`
    },
    "compare-7" : {
      result : null,
      sql : `
      with t1 as
      (
      select 
        count(distinct TX_ID) as number, date_trunc('day',BLOCK_TIMESTAMP) as date,
      CASE
      when PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2') then 'Star Atlas'
      when PROGRAM_ID in ('HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU') then 'Genopets'
      when PROGRAM_ID in ('EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW') then 'Aurory'
      end as game 
      from 
        solana.core.fact_events
      
      where 
      PROGRAM_ID in ('FLEET1qqzpexyaDpqb2DGsSzE2sDCizewCg9WjrA6DBW','traderDnaR5w6Tcoi3NFm53i48FTDNbGjBSZwWXDRrg','gateVwTnKyFrE8nxUUgfzoZTPKgJQZUbLsEidpG4Dp2',
        'HAbiTatJVqoCJd9asyr6RxMEdwtfrQugwp7VAFyKWb1g','CrAFTUv7zKXBaS5471aCwHx7mq9Jp1eQQB5FQgdiSLyi','StaKe9nb7aUjXpjpZ45o6uJBsZxj2BWCDBtjk8LCg2v','srmv4uTCPF81hWDaPyEN2mLZ8XbvzuEM6LsAxR8NpjU',
        'EXpwP3pqPzA4arF8i89w7smtvxHzyYETmCpPspLPrR7J','STkwf3sbMapjy7KV3hgrJtcVvY4SvRxWQ8pj4Enw1i5','StKLLTf7CQ9n5BgXPSDXENovLTCuNc7N2ehvTb6JZ5x','comp8FLpN5bbNUC2fhnkFtM7T16DWvaHs8N5dcaoZWP','CAsieqooSrgVxhgWRwh21gyjq7Rmuhmo4qTW9XzXtAvW'
        )
      
      group by 2,3
      order by date asc)
      
      select 
      sum(case when GAME='Aurory' then NUMBER else 0 end)*100/(sum(case when GAME='Aurory' then NUMBER else 0 end)+sum(case when GAME='Star Atlas' then NUMBER else 0 end)+sum(case when GAME='Genopets' then NUMBER else 0 end)) as Aurory,
      sum(case when GAME='Star Atlas' then NUMBER else 0 end)*100/(sum(case when GAME='Aurory' then NUMBER else 0 end)+sum(case when GAME='Star Atlas' then NUMBER else 0 end)+sum(case when GAME='Genopets' then NUMBER else 0 end)) as StarAtlas,
      sum(case when GAME='Genopets' then NUMBER else 0 end)*100/(sum(case when GAME='Aurory' then NUMBER else 0 end)+sum(case when GAME='Star Atlas' then NUMBER else 0 end)+sum(case when GAME='Genopets' then NUMBER else 0 end)) as Genopets,
        date 
        from t1 
        group by date 
        order by date`
    }
  },

};

const getters = {
  getQueries(state) {
    return state.queries;
  },
};

const mutations = {
  setQueryResult(state, data) { // data => query, result
    state.queries[data.query].result = data.result;
  },
};



export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
