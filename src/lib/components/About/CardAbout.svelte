<script lang="ts">
    export let title: string
</script>

<div class="flex flex-col aspect-video gap-y-4 p-8 rounded-2xl bg-[#e2e2e2] shadow-lg dark:bg-gri-700">
    <h2 class="font-bold text-3xl sm:text-4xl md:text-3xl lg:text-4xl">{title}</h2>
    <p class="font-semibold text-lg sm:text-xl md:text-lg lg:text-xl text-neutral-900/70 dark:text-white/70">
        <slot/>
    </p>
</div>