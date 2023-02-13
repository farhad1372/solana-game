
const state = {
  queries: {
    "game-1": {
      result: null,
      sql: `
        select 
        count(distinct SIGNERS[0]) as users, 
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
        
        group by 2`
    },
    "game-2-1": {
      result: null,
      sql: `
      select 
      count(distinct SIGNERS[0]) as users, 
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
      
      group by 2`
    },
    "game-2-2": {
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
      
      
      (select count(*) as number , 'Star Atlas' as game from mint a left join solana.core.dim_labels b 
        on a.mint=b.address where LABEL_TYPE='nft' and game='Star Atlas')
      
      union all 
      
      (select count(*) as number, 'Genopets' as game   from mint a left join solana.core.dim_labels b 
        on a.mint=b.address where LABEL_TYPE='nft' and game='Genopets')
      
      
      union all 
      
      (select count(*) as number, 'Auasrory' as gam  from mint a left join solana.core.dim_labels b 
        on a.mint=b.address where  LABEL_TYPE='nft' and game='Auasrory')
      `
    },
    "game-2-3" : {
      result : null,
      sql : `with mint as 
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
      
      
      (select count(*) as number  from mint a left join solana.core.dim_labels b on a.mint=b.address 
        where 
        LABEL_TYPE='nft' and game='Genopets')
      
      union all 
      
      
      (select count(*) as number  from mint a left join solana.core.dim_labels b on a.mint=b.address 
        where 
        amount=1 and game='Aurory')
      
      
      union all 
      
      
      (select count(*) as number  from mint a left join solana.core.dim_labels b on a.mint=b.address 
        where 
        amount=1 and game='Star Atlas')`
    }

  }

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
