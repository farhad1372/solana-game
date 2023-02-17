<template>
  <div class="row">
    <div class="col-12">
      <!-- :stacked="{ number: 2, order: ['createAccount', 'transferChecked'] }" -->
      <BarChart
        x-type="time"
        label="Transactions"
        title="Number of transactions"
        query-name="compare-1"
        :axis="{ x: 'date', y: 'number' }"
        :stacked="{
          number: 3,
          column: 'game',
          order: ['Aurory', 'Star Atlas', 'Genopets'],
        }"
        :stacked-order="['Aurory', 'Star Atlas', 'Genopets']"
        :groupBy="{ by: 'date', type: 'asc' }"
      />
    </div>

   

    <div class="col-12 col-lg-6 h-100">
      <DoughnutChart
        query-name="compare-1"
        label="Transaction Number"
        :some-in-group="{ by: 'game', over: 'number' }"
      />
    </div>

    <div class="col-12 col-lg-6">
      <BarChart
        dot-format-date
        x-type="category"
        label="participation"
        title="proposals and number of participation"
        query-name="compare-4"
        :axis="{ x: 'proposal_id', y: 'number' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        x-type="time"
        label="Users"
        title="Daily new users"
        query-name="compare-3"
        :axis="{ x: 'datee', y: 'number' }"
        :stacked="{
          number: 3,
          column: 'game',
          order: ['Aurory', 'Star Atlas', 'Genopets'],
        }"
        :stacked-order="['Aurory', 'Star Atlas', 'Genopets']"
        :groupBy="{ by: 'datee', type: 'asc' }"
      />
    </div>

    <div class="col-12">
      <BarChart
        x-type="time"
        label="Users"
        title="Daily new users"
        query-name="compare-5"
        :axis="{ x: 'datee', y: 'number' }"
        :stacked="{
          number: 3,
          column: 'game',
          order: ['Aurory', 'Star Atlas', 'Genopets'],
        }"
        :stacked-order="['Aurory', 'Star Atlas', 'Genopets']"
        :groupBy="{ by: 'datee', type: 'asc' }"
      />
    </div>

    <div class="col-12 col-lg-6 col-xl-4">
      <SingleChart
        title="number of players that play all games"
        query-name="compare-1"
        column="0"
        :parentIndex="1"
      />
    </div>
    <div class="col-12 col-lg-6 col-xl-4">
      <SingleChart
        title="number of players that play two games"
        query-name="compare-1"
        column="0"
        :parentIndex="0"
      />
    </div>
    <div class="col-12 col-lg-6 col-xl-4">
      <SingleChart
        title="number of players that play just one game"
        query-name="compare-1"
        column="0"
        :parentIndex="2"
      />
    </div>

    <div class="col-12 col-lg-6">
      <DoughnutChart
        dataItem="numberr"
        query-name="compare-2"
        label="Number of users based on how many games they play"
      />
    </div>

    <div class="col-12 col-lg-6">
      <BarChart
        dot-format-date
        x-type="category"
        label="Users"
        title="Number of users based on how many games they play"
        query-name="compare-6"
        :axis="{ x: 'games_number', y: 'numberr' }"
        :chartColors="3"
      />
    </div>

    <!-- <div class="col-12 col-lg-6">
      <LineChart
        query-name="compare-1"
        x-type="time"
        title="Daily new users"
        label="Users"
        :axis="{ x: 'datee', y: 'number' }"
        :point-radius="0"
        :group-by="{ by: 'datee' }"
        :stacked="{
          number: 3,
          column: 'game',
          order: ['Aurory', 'Star Atlas', 'Genopets'],
        }"
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
