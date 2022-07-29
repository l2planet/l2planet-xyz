<script lang="ts">
import { Block } from "$lib/utils/editor";
import IconAdd from "../icons/IconAdd.svelte";
import IconSend from "../icons/IconSend.svelte";
import ButtonIcon from "./ButtonIcon.svelte";
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
                        case 'ArrowUp': {if(focus>0) focus = key -1; break}
                        case 'ArrowDown': {if(focus<blocks.length-1) focus = key +1; break}
                        case 'ArrowLeft': {if(focus>0) focus = key -1; break}
                        case 'ArrowRight': {if(focus<blocks.length-1) focus = key +1; break}
                    }
                }}
                onRemove={()=>{if(key==0) return; blocks = [...blocks.slice(0, key), ...blocks.slice(key +1)]}}
                onUp={()=>{if(key==0) return; blocks = [...blocks.slice(0, key - 1), blocks[key], blocks[key-1], ...blocks.slice(key+1)]}}
                onDown={()=>{if(key== blocks.length -1) return; blocks = [...blocks.slice(0, key), blocks[key+1], blocks[key], ...blocks.slice(key+2)]}}
            />
        {/each}
        <div class="flex justify-between">
            <ButtonIcon><IconSend/></ButtonIcon>
            <ButtonIcon on:click={() => {if(focus == blocks.length - 1) focus = focus + 1; blocks = [...blocks, new Block()]}}><IconAdd/></ButtonIcon>
        </div>
    </Editable>
</Wrapper>