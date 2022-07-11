<script lang="ts">
    import { onMount } from 'svelte';
    import { theme } from '../lib/utils/theme'
    import '../app.css'

    onMount(() => {
        theme.init()
    })
</script>

<slot/>