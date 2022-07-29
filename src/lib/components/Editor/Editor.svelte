<script lang="ts">
import { Block } from "$lib/utils/editor";
import ButtonTool from "./ButtonTool.svelte";

import Editable from "./Editable.svelte";
import Line from "./Line.svelte";
import SendButton from "./SendButton.svelte";
import ToolBar from "./ToolBar.svelte";
import Wrapper from "./Wrapper.svelte";

    let blocks: Block[] = [
        new Block('t', 'title'),
        new Block('s', 'subtitle'),
        new Block,
    ]

    let focus: number = 0
    $: {
        console.log(focus);
        if(typeof window !== 'undefined') setTimeout(() => {
            const blockElement = document.getElementById(blocks[focus]?.id) as HTMLInputElement
            blockElement?.focus()
            blockElement?.setSelectionRange(blockElement.value.length, blockElement.value.length)
        }, 0)
    }

</script>

<Wrapper>
    <ToolBar>
        <ButtonTool on:click={() => {blocks[focus].setTitle(); blocks = blocks}}>Title</ButtonTool>
        <ButtonTool on:click={() => {blocks[focus].setSubtitle(); blocks = blocks}}>Subtitle</ButtonTool>
        <ButtonTool on:click={() => {blocks[focus].setHeading1(); blocks = blocks}}>Large Heading</ButtonTool>
        <ButtonTool on:click={() => {blocks[focus].setHeading2(); blocks = blocks}}>Small Heading</ButtonTool>
        <ButtonTool on:click={() => {blocks[focus].setParagraph(); blocks = blocks}}>Paragraph</ButtonTool>
    </ToolBar>
    <Editable>
        {#each blocks as blk, key}
            <Line
                block={blk}
                on:focus={()=>focus=key}
                on:keydown={e=>{
                    switch(e.key) {
                        case 'Enter': {blocks = [...blocks.slice(0, key), blocks[key], new Block() ,...blocks.slice(key+1)]; focus = key +1; break}
                        case 'Backspace': {if(blocks[key].content.length != 0 || blocks.length < 2 || focus == 0) return; blocks = [...blocks.slice(0, key), ...blocks.slice(key + 1)]; focus = key -1; break}
                        case 'ArrowUp': {if(focus>0) focus = key -1; break}
                        case 'ArrowDown': {if(focus<blocks.length-1) focus = key +1; break}
                        case 'ArrowLeft': {if(focus>0) focus = key -1; break}
                        case 'ArrowRight': {if(focus<blocks.length-1) focus = key +1; break}
                    }
                }}
            />
        {/each}
    </Editable>
    <ToolBar>
        <p class="flex items-center font-medium text-dark/70 dark:text-lite/70">When you export the text, the whole content will be in console. Press Fn + F12 to see'em.</p>
        <SendButton on:click={()=>{blocks.forEach(block => console.log(block))}}>Export</SendButton>
    </ToolBar>
</Wrapper>