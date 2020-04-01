<template>
    <div id="main" style="width: 1600px;height: 700px"></div>
</template>

<script>
    import echarts from 'echarts';
    export default {
        name: "venderCharts",
        mounted() {
            var myChart = echarts.init(document.getElementById('main'));
            var option = {
                title: {
                    text: '季度商品销量'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子","衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20,54,12,89,56,44,77]
                }]
            };
            myChart.setOption(option);
        }
    }
</script>

<style scoped>

</style>
