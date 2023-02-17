<template>
  <div class="row">
    <div class="col-12">
      <div class="text-center">
        <h1 class="text-white mt-9 mb-3">What is aurory?</h1>
        <p style="max-width: 780px" class="mx-auto">
          AURORY is a free-to-play, tactical, turn-based JRPG built on the
          Solana blockchain. Players are invited to explore a rich and diverse
          universe where they will travel across the worlds of Antik and Tokané
          as they complete quests, discover lost relics, defeat enemies, and
          compete against other players using creatures called “Nefties".
        </p>
      </div>
      <img
        class="rounded"
        src="@/assets/images/game-3.jpg"
        style="width: 100%"
      />
    </div>

    <div class="col-12">
      <div class="row px-0">
        <div class="col-12">
          <SingleChart
            title="Aurory user number"
            query-name="game-3-1"
            :parentIndex="2"
            column="0"
          />
        </div>
      </div>
    </div>

    <div class="col-12 col-lg-6">
      <BarChart
        x-type="time"
        label="Users"
        title="Daily aurory transaction number"
        query-name="game-3-1"
        :axis="{ x: 'date', y: 'aurory' }"
      />
    </div>

    <div class="col-12 col-lg-6">
      <LineChart
        query-name="game-3-1"
        x-type="time"
        title="Daily aurory cumulative new users"
        label="Users"
        :axis="{ x: 'datee', y: 'caurory' }"
      />
    </div>

    <div class="col-12">
      <!-- :stacked="{ number: 2, order: ['createAccount', 'transferChecked'] }" -->
      <BarChart
        x-type="time"
        label="Types"
        title="Aurory number of inner transaction types"
        query-name="game-3-2"
        :axis="{ x: 'date', y: 'number' }"
        :stacked="{
          number: 9,
          column: 'type',
          order: [
            'setAuthority',
            'allocate',
            'closeAccount',
            'burn',
            'initializeMint',
            'createAccountWithSeed',
            'transfer',
            'mintTo',
            'createAccount',
          ],
        }"
        :stacked-order="[
          'setAuthority',
          'allocate',
          'closeAccount',
          'burn',
          'initializeMint',
          'createAccountWithSeed',
          'transfer',
          'mintTo',
          'createAccount',
        ]"
        :groupBy="{ by: 'date', type: 'asc' }"
      />
    </div>

 

    <div class="col-12">
      <BarChart
        dot-format-date
        x-type="category"
        label="Tokens"
        title="Tokens mint on Aurory"
        query-name="game-3-4"
        :axis="{ x: 'mint', y: 'volume' }"
      />
    </div>

    <div class="col-12 col-lg-6">
      <BarChart
        x-type="time"
        label="Users"
        title="Daily aurory new users"
        query-name="game-3-3"
        :axis="{ x: 'datee', y: 'aurory' }"
      />
    </div>


    <div class="col-12 col-lg-6">
      <BarChart
      dot-format-date
        x-type="category"
        label="Tokens"
        title="token burned on aurory"
        query-name="game-3-5"
        :axis="{ x: 'mint', y: 'volume' }"
      />
    </div>

    <div class="col-12">
            <DataTable title="Tokens mint on geopets" query-name="game-3-1" :haders="['mint', 'volume']"
                :dataNames="['mint', 'volume']" />
        </div>

        
    <div class="col-12">
            <DataTable title="Tokens burnt on geopets" query-name="game-3-2" :haders="['mint', 'volume']"
                :dataNames="['mint', 'volume']" />
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
