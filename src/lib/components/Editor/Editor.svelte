<script lang="ts">
import { Block } from "$lib/utils/editor";

import Editable from "./Editable.svelte";
import Line from "./Line.svelte";
import ToolBar from "./ToolBar.svelte";
import Wrapper from "./Wrapper.svelte";

    let blocks: Block[] = [
        new Block('t', 't'),
        new Block('s', 's'),
        new Block,
    ]

    let focus: number = 0
    $: {
        console.log(focus);
        if(typeof window !== 'undefined') document.getElementById(blocks[focus]?.id)?.focus()
    }

</script>

<Wrapper>
    <ToolBar>
    </ToolBar>
    <Editable>
        {#each blocks as blk, key}
            <Line
                block={blk} 
                on:focus={()=>focus=key}
            />
        {/each}
    </Editable>
</Wrapper>