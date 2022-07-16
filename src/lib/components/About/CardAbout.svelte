<script lang="ts">
    export let title: string
</script>

<div class="flex flex-col aspect-video gap-y-4 p-8 rounded-2xl shadow-lg shadow-slate-900/10 dark:shadow-none bg-sky-400/70 dark:bg-sky-800/70">
    <h2 class="font-bold text-3xl sm:text-4xl md:text-3xl lg:text-4xl">{title}</h2>
    <p class="font-semibold text-lg sm:text-xl md:text-lg lg:text-xl text-slate-900/70 dark:text-white/70">
        <slot/>
    </p>
</div>