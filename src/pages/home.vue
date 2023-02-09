<template>
  <div class="row">
    <div calss="col-12">
      <img class="rounded" src="@/assets/images/opti.jpg" style="width: 100%" />
      <h2 class="mt-10">What is Optimism?</h2>
      <p>
        Optimism is a layer 2 chain, meaning it functions on top of Ethereum
        mainnet (layer 1). Transactions take place on Optimism, but the data
        about transactions get posted to mainnet where they are validated. Its
        like driving in a less crowded side street while benefiting from the
        security of a highway. <br />
        Optimism is the second-largest Ethereum layer 2 with a total of $313
        million locked into its smart contracts, as of this writing, according
        to Defi Llama. Arbitrum comes first with $1.32 billion.<br />
        Synthetix, a derivatives liquidity protocol, is the largest protocol on
        Optimism, with a total value locked (TVL) of $125 million. Uniswap, a
        decentralized exchange (DEX), is the second most popular protocol on the
        chain. As of this writing, there are 35 protocols on Optimism with at
        least $1,000 locked into their smart contracts. <br />
      </p>

      <h2>How does Optimism work?</h2>
      <p>
        Optimism uses a technology called rollups, specifically Optimistic
        rollups. <br />
        They're called rollups because they roll up (or bundle) the data about
        hundreds of transactions non-fungible token (NFT) mints, token swaps …
        any transaction! into a single transaction on Ethereum mainnet (layer
        1). When so many transactions are rolled up into a single transaction,
        the blockchain transaction, or "gas," fee required to pay comes down to
        only one transaction, conveniently distributed across everyone involved.
        <br />
        And they're called Optimistic rollups because transactions are assumed
        to be valid until they are proven false, or in other words, innocent
        until proven guilty. There's a time window during which potentially
        invalid transactions can be challenged by submitting a “fraud proof” and
        running the transactions computations with reference to available state
        data. Optimism reimburses the gas needed to run the computation of the
        fraud proof. (Here s a more technically detailed explanation of the
        process.) <br />
      </p>

      <h2>How do you use Optimism?</h2>
      <p>
        For users, Optimism feels pretty much the same as Ethereum mainnet. Your
        Optimism address is the same as your Ethereum mainnet address, which
        begins with 0x. Optimism's blockchain explorer is identical to
        Etherscan, Ethereum mainnet's blockchain explorer. <br />

        Optimism supports a bunch of decentralized finance (DeFi) wallets,
        including MetaMask, the most popular choice. Ethereum (ETH), the largest
        smart-contracts blockchain, has a scalability problem. As more and more
        users join Ethereum, the network becomes more expensive and slower to
        use.<br />

        In response to Ethereum's scalability problem, a bunch of Ethereum
        alternatives - popularly known as "Ethereum killers" - have emerged.
        So-called Ethereum killers, such as Avalanche or Fantom, are separate
        blockchains, or layer 1s like Ethereum. Meanwhile, the Ethereum
        ecosystem has come up with a scaling solution: layer 2s, chains that
        work on top of Ethereum mainnet.<br />

        Read More: What Is Avalanche? A Look at the Popular 'Ethereum-Killer'
        Blockchain <br />
        Optimism is one of the layer 2 scaling solutions. It's powered by a
        technology called Optimistic rollups, which bundle large amounts of
        transaction data into digestible batches. Optimism is much cheaper to
        use than Ethereum, and it's increasingly becoming popular along with
        other layer 2s, such as Arbitrum. <br />
        Optimism is governed by its eponymous token, or OP for short. A portion
        of the OP supply was airdropped to early Optimism users in late May 2022
        in a turbulent launch. Developers behind Optimism said it would continue
        to airdrop more tokens. <br />
      </p>
      <h2>What is OP, Optimism's token?</h2>
      <p>
        Optimism launched its OP token on May 31. A total of 231,000 addresses
        were eligible to claim 214 million OP tokens for free (known as an
        “airdrop”). That accounts for 5% of the total 4.29 billion supply,
        meaning 95% of the supply has yet to hit the market. You can track how
        many users claimed the first airdrop on this Dune Analytics
        dashboard.<br />

        The initial airdrop was met with “widespread frustration from the
        Optimism community” after some users claimed tokens early and then
        dumped those tokens.[1]
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    //  BarChart: () => import("@/components/charts/bar.vue"),
    // DoughnutChart: () => import("@/components/charts/doughnut.vue"),
    // LineChart: () => import("@/components/charts/line.vue"),
    // MixedChart: () => import("@/components/charts/mixed.vue"),
    // SingleChart: () => import("@/components/charts/single.vue")
  },
};
</script>
