<template>
        <div class="row">
                <div class="col-12 col-xl-6">
                        <BarChart class="border rounded" x-type="time"
                                title="Volume of ETH withdraw from optimism bridge per week" query-name="bridge"
                                :axis="{ x: 'date', y: 'bridge' }" label="Volume" />
                </div>

                <div class="col-12 col-xl-6">
                        <BarChart class="border rounded" x-type="time"
                                title="Volume of ETH deposited to optimism bridge per week" query-name="bridge_2"
                                :axis="{ x: 'date', y: 'bridge' }" label="Volume" />
                </div>


                <div class="col-12 col-xl-6">
                        <BarChart class="border rounded" dot-format-date title="Tokens bridge in (US dollars $)" formatNumberYAxis
                                query-name="bridge_in" :axis="{ x: 'symbol', y: 'token' }" label="token" :chart-colors="6" />
                </div>

                <div class="col-12 col-xl-6">
                        <BarChart class="border rounded" dot-format-date title="Tokens bridge in (US dollars $)" formatNumberYAxis
                                query-name="bridge_out" :axis="{ x: 'symbol', y: 'token' }" label="token" :chart-colors="6" />
                </div>


                
                <div class="col-12 col-xl-6">
                        <BarChart class="border rounded" dot-format-date title="Tokens bridge in (US dollars $) in last week"  formatNumberYAxis
                                query-name="bridge_in_last_week" :axis="{ x: 'symbol', y: 'token' }" label="token" :chart-colors="6" />
                </div>



                <div class="col-12 col-xl-6">
                        <BarChart class="border rounded" dot-format-date title="Tokens bridge out (US dollars $) in last week"  formatNumberYAxis
                                query-name="bridge_out_last_week" :axis="{ x: 'symbol', y: 'token' }" label="token" :chart-colors="6" />
                </div>

        </div>
</template>

<script>
export default {
        data() {
                return {

                }
        },
        components: {
                BarChart: () => import("@/components/charts/bar.vue"),
                // DoughnutChart: () => import("@/components/charts/doughnut.vue"),
        }
}
</script>