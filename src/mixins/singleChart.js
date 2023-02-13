
export const singleChartMixin = {
    data() {
        return {

        }
    },
    computed: {
        singleChartData() {
            let _data = this.$store.getters[`${this.namespace}/getQueries`][this.queryName];
            if (this.parentIndex !== false) {
                return this.$options.filters.formatNumber(_data.result?.rows[this.parentIndex][this.column], this.type);
            }
            else if (_data.result && _data.result.rows) {
                return this.$options.filters.formatNumber(_data.result?.rows[0][this.column], this.type);
            } else {
                return null
            }
        }
    },
    methods: {}
}