<script lang="ts">
import Wrapper from "./Wrapper.svelte";
import { BACKSPACE, Block, CMD, DOWN, ENTER, getCursorPosition, getToolAxis, LEFT, RIGHT, setCursorPosition, UP } from "$lib/utils/editor";
import EditableBlock from "./EditableBlock.svelte";
import Tool from "./Tool.svelte";
import Large from "./Blocks/Large.svelte";
import Link from "./Blocks/Link.svelte";

    let toolAxis = [0, 0]
    let toolShown: boolean = false

    let editorBlocks: Block[] = [new Block('t', 'Title'), new Block('s', 'Subtitle'), new Block]
    let focus: number = 0
    $: if(typeof window !== 'undefined') setTimeout(() => {
        toolShown = false
        const elem = document.getElementById(editorBlocks[focus].id) as HTMLDivElement
        elem.focus()
        setCursorPosition(elem, elem?.textContent?.length || 0)
    } , 0)

    function onKeyDown(e: KeyboardEvent) {
        const target = e.target as HTMLDivElement
        const cursor = getCursorPosition(target)
        switch(e.key) {
            case ENTER: {
                e.preventDefault()
                if(focus < 1) {focus += 1; return}
                editorBlocks = [...editorBlocks.slice(0, focus), editorBlocks[focus], new Block, ...editorBlocks.slice(focus+1)]
                focus += 1
                break
            }
            case BACKSPACE: {
                if(target.textContent || focus == 0) return
                if(focus < 2) {focus -= 1; return}
                editorBlocks = [...editorBlocks.slice(0, focus), ...editorBlocks.slice(focus+1)]
                focus -= 1;
                break
            }
            case UP: {
                if(focus == 0) return
                focus -= 1
                break
            }
            case DOWN: {
                if(target.textContent?.length != cursor || focus == editorBlocks.length - 1) return
                focus += 1
                break
            }
            case LEFT: {
                if(focus == 0 || cursor !== 0) return
                focus -= 1
                break
            }
            case RIGHT: {
                if(target.textContent?.length != cursor || focus == editorBlocks.length - 1) return
                focus += 1
                break
            }
            case CMD: {
                if(focus < 2) return; 
                toolShown = !toolShown
                toolAxis = getToolAxis(target)
            }
        }
        if(e.key != CMD) toolShown = false
    }
</script>

<Wrapper>
    {#each editorBlocks as block, index}
        <EditableBlock {block}
        on:keydown={onKeyDown}
        on:focus={() => {focus = index; toolShown = false}}
    />
    {/each}
</Wrapper>
<Tool isShown={toolShown} left={toolAxis[0]} top={toolAxis[1]}
    onImage={()=>editorBlocks[focus].type = 'Image'}
    onLarge={()=>editorBlocks[focus].type = 'Large'}
    onLink={()=>editorBlocks[focus].type = 'Link'}
    onList={()=>editorBlocks[focus].type = 'List'}
    onMedium={()=>editorBlocks[focus].type = 'Medium'}
    onNote={()=>editorBlocks[focus].type = 'Note'}
    onSmall={()=>editorBlocks[focus].type = 'Small'}
    onText={()=>editorBlocks[focus].type = 'Text'}
    onTweet={()=>editorBlocks[focus].type = 'Tweet'}
    onYoutube={()=>editorBlocks[focus].type = 'Youtube'}
    on:click={()=>{toolShown = false; editorBlocks[focus].content = editorBlocks[focus].content.slice(0, editorBlocks[focus].content.length-1)}}
/>