<script lang="ts">
import { Block, calcFontSize, calcFontWeight, type BlockType } from "$lib/utils/editor";

    export let block: Block
    const placeholder: string = block.getPlaceholder()

</script>

<input
    placeholder={placeholder}
    id={block.id}
    on:focus
    on:keydown
    on:keyup

    class="px-6 py-3 rounded-2xl bg-slate-100 dark:bg-slate-700 outline-none"
    style="
        font-size: {calcFontSize(block.type)};
        font-weight: {calcFontWeight(block.type)};
        "
/>