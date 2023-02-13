<template>
  <div class="row">
    <div class="col-12">
      <div class="text-center">
        <h1 class="text-white mt-9 mb-3">What is genopets?</h1>
        <p style="max-width: 780px" class="mx-auto">
          Genopets is the gamification of an active lifestyle. Walking around
          the mall? Jogging at the gym? Running between meetings in your office?
          No matter how you stay active, your Genopet is always by your side,
          counting the steps you'll use to fuel your gameplay. <br />
          Genopets is a move-to-earn game that does more than count your steps
          and reward you for how much you walk. The game is predicated on you
          building a bond with your digital companion and taking care of it
          every day by taking care of yourself.
        </p>
      </div>
      <img
        class="rounded"
        src="@/assets/images/game-2.jpeg"
        style="width: 100%"
      />
    </div>

    <div class="col-12">
      <div class="row px-0">
        <div class="col-12">
          <SingleChart
            title="Genopets user number"
            query-name="game-2-1"
            column="0"
          />
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6">
      <BarChart
        x-type="time"
        label="Transactions"
        title="Daily genopets transaction number"
        query-name="game-2-1"
        :axis="{ x: 'date', y: 'genopets' }"
      />
    </div>

    <div class="col-12 col-lg-6">
      <LineChart
        query-name="game-2-1"
        x-type="time"
        title="Cumulative Daily genopets new users"
        label="Users"
        :axis="{ x: 'datee', y: 'cgenopets' }"
      />
    </div>

    <div class="col-12 col-lg-6">
      <!-- :stacked="{ number: 2, order: ['createAccount', 'transferChecked'] }" -->
      <BarChart
        x-type="time"
        label="Types"
        title="Star Atlas daily number of inner transaction types"
        query-name="game-2-2"
        :axis="{ x: 'date', y: 'number' }"
        :stacked="{
          number: 11,
          column: 'type',
          order: [
            'initializeMint2',
            'getAccountDataSize',
            'closeAccount',
            'initializeAccount3',
            'burn',
            'create',
            'allocate',
            'mintTo',
            'createAccount',
            'initializeMint',
            'transfer',
          ],
        }"
        :stacked-order="[
          'initializeMint2',
          'getAccountDataSize',
          'closeAccount',
          'initializeAccount3',
          'burn',
          'create',
          'allocate',
          'mintTo',
          'createAccount',
          'initializeMint',
          'transfer',
        ]"
        :groupBy="{ by: 'date', type: 'asc' }"
      />
    </div>

    <div class="col-12 col-lg-6">
      <BarChart
        x-type="time"
        label="Users"
        title="Daily genopets new users"
        query-name="game-2-3"
        :axis="{ x: 'datee', y: 'genopets' }"
      />
    </div>

    <div class="col-12 col-lg-6">
      <SingleChart
        title="number of NFT burn on genopets"
        query-name="game-2-2"
        column="0"
        :parentIndex="1"
      />
    </div>
    <div class="col-12 col-lg-6">
      <SingleChart
        title="number of NFT burn on genopets"
        query-name="game-2-3"
        column="0"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
