<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  export let value = '';
  export let disabled = false;
  export let label = 'Label';
  export let type = 'text';
  let isFocused = false;
  $: isLabelRaised = value !== '' || isFocused;

  function handleFocus (value) {
    isFocused = value;
  }

  function onKeyPress (event) {
    switch (event.key) {
      case 'Enter': dispatch('enter'); break;
      case 'Escape': dispatch('escape'); break;
    }
  }
</script>

<label
  class="label"
  class:focused={isFocused}
>
  {#if label}
    <div
      class="label-text"
    >
      {label}
    </div>
  {/if}
  {#if type==="password"}
    <input
      class="input"
      bind:value
      type="password"
      {disabled}
      on:focus={() => {handleFocus(true)}}
      on:blur={() => {handleFocus(false)}}
      on:keydown={onKeyPress}
    />
  {:else}
    <input
      class="input"
      bind:value
      type="text"
      {disabled}
      on:focus={() => {handleFocus(true)}}
      on:blur={() => {handleFocus(false)}}
      on:keydown={onKeyPress}
    />
  {/if}
</label>

<style lang="postcss">
  .label {
    margin: 1rem;
  }
  .label-text {
    height: 3rem;
    font-size: 2rem;
  }
  .input {
    height: 4rem;
    display: flex;
    border-radius: 2px;
    border: 1px solid #cccccc;
    padding: 1rem;
    width: 100%;
  }
</style>
