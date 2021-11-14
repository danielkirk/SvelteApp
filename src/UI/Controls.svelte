<script>
    import Chart from './Chart.svelte';

    let data = [1,2,3,4,5,6];
</script>
<br />
<br />

<input type="number"  bind:value={data[0]}/>
<input type="number"  bind:value={data[1]}/>
<input type="number"  bind:value={data[2]}/>
<input type="number"  bind:value={data[3]}/>
<input type="number"  bind:value={data[4]}/>
<input type="number"  bind:value={data[5]}/>

<Chart {data} />