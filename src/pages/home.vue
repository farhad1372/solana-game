<template>
  <div class="row">
    <div class="col-12">
      <div class="text-center">
        <h1 class="text-white mt-9 mb-3">what is Star Atlas?</h1>
        <p style="max-width: 780px" class="mx-auto">
          <a target="_blank" href="https://staratlas.com/">Star Atlas</a>
          is arguably one of the most ambitious
          <a
            target="_blank"
            href="https://decrypt.co/resources/non-fungible-tokens-nfts-explained-guide-learn-blockchain"
            >NFT-driven</a
          >
          games on the horizon although it could be years before the
          <a
            target="_blank"
            href="https://decrypt.co/resources/what-is-solana-a-scalable-decentralized-network-for-dapps"
            >Solana-based</a
          >
          outer space strategy game fully takes shape. Eager players won't have
          to wait that long to get a small taste, however: a limited demo has
          just been released via the Epic Games Store.
        </p>
      </div>
      <img
        class="rounded"
        src="@/assets/images/game-1.webp"
        style="width: 100%"
      />
    </div>

    <div class="col-12">
      <div class="row px-0">
        <div class="col-12">
          <SingleChart
            title="Star Atlas User number"
            query-name="game-1"
            column="0"
          />
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6">
      <BarChart
        label="Transactions"
        x-type="time"
        title="Daily star atlas transaction number"
        query-name="game-1"
        :axis="{ x: 'date', y: 'star_atlas' }"
      />
    </div>

    <div class="col-12 col-lg-6">
      <BarChart
        x-type="time"
        label="Users"
        title="Daily star atlas new users"
        query-name="game-1-1"
        :axis="{ x: 'datee', y: 'star_atlas' }"
      />
    </div>

    <div class="col-12">
      <!-- :stacked="{ number: 2, order: ['createAccount', 'transferChecked'] }" -->
      <BarChart
        x-type="time"
        label="Types"
        title="Star Atlas daily number of inner transaction types"
        query-name="game-1-2"
        :axis="{ x: 'date', y: 'number' }"
        :stacked="{
          number: 8,
          column: 'type',
          order: [
            'createAccountWithSeed',
            'createAccount',
            'transferChecked',
            'allocate',
            'transfer',
            'closeAccount',
            'burnChecked',
            'initializeAccount',
          ],
        }"
        :stacked-order="[
          'createAccountWithSeed',
          'createAccount',
          'transferChecked',
          'allocate',
          'transfer',
          'closeAccount',
          'burnChecked',
          'initializeAccount',
        ]"
        :groupBy="{ by: 'date', type: 'asc' }"
      />
    </div>

    <div class="col-12 col-lg-6">
      <LineChart
        query-name="game-1-1"
        x-type="time"
        title="Cumulative Daily star atlas new users"
        label="Users"
        :axis="{ x: 'datee', y: 'cstar_atlas' }"
      />
    </div>

    <!-- <div class="col-12 col-lg-6">
      <BarChart
        x-type="time"
        label="Types"
        title="Star Atlas daily number of inner transaction types"
        query-name="game-1-3"
        :axis="{ x: 'date', y: 'number' }"
        
        :stacked="{
          number: 8,
          column: 'type',
          order: [ 'createAccountWithSeed' , 'createAccount', 'transferChecked' , 'allocate' , 'transfer' , 'closeAccount' , 'burnChecked' , 'initializeAccount'],
        }"
        :stacked-order="[ 'createAccountWithSeed' , 'createAccount', 'transferChecked' , 'allocate' , 'transfer' , 'closeAccount' , 'burnChecked' , 'initializeAccount']"
        :groupBy="{ by: 'date', type: 'asc' }"
      />
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
