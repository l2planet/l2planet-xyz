<table class="flex flex-col rounded-3xl p-3 gap-y-3 border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800">
    <thead>
        <tr class="grid grid-cols-3 rounded-2xl px-6">
            <th class="text-left">Name</th>
            <th class="text-right">Max TPS</th>
            <th class="text-right">TPS</th>
        </tr>
    </thead>
    <tbody class="flex flex-col gap-y-3 font-bold">
        <slot/>
    </tbody>
</table>