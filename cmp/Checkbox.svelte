<script>
  import SvgIcon from './SvgIcon.svelte';
  export let checked = false;
  export let label;
</script>

<label>
  <input type="checkbox" {checked} >
  <div class='border' class:checked>
    {#if checked}
      <SvgIcon icon='check'/>
    {/if}
  </div>
  <p>{label}</p>
</label>

<style>
  input {
    display: none;
  }
  .border {
    width: 3rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: 2px;
    color: transparent;
  }
  .checked {
    color: black;
  }
</style>
