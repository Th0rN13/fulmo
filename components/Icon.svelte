<script>
  export let title;
  export let disabled = false;
  export let loading = false;
</script>

<button
  {disabled}
  on:click
  class="button"
  class:disabled
  class:loading
>
  {title}
</button>

<style lang="postcss">
  .button {
    appearance: none;
    min-width: 120px;
    height: 4rem;
    font-size: 2rem;
    padding: 1rem;
    margin: 1rem;
    background-color: var(--color-primary-bg);
    border: none;
    border-radius: 2px;
    color: var(--color-primary);
    cursor: pointer;
    &:hover {
      background-color: var(--color-primary-bg-darker);
    }
  }
  .disabled {
    background-color: var(--color-disabled-bg);
    color: var(--color-disabled);
    cursor: not-allowed;
    &:hover {
      background-color: var(--color-disabled-bg-darker);
    }
  }
  .button.loading {
    color: transparent;
    cursor: wait;
    position: relative;
  }
</style>
