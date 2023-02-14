
const state = {
  //General
  queries: {
    'game-1-1': {
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
    'game-2-1': {
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
    "compare-1": {
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
