<table class="flex flex-col rounded-3xl p-3 gap-y-3 shadow-lg shadow-slate-900/10 dark:shadow-none bg-slate-100 dark:bg-slate-800">
    <thead>
        <tr class="grid grid-cols-3 w-full px-6">
            <th class="text-left">Name</th>
            <th class="text-right">Send</th>
            <th class="text-right">Swap</th>
        </tr>
    </thead>
    <tbody class="flex flex-col gap-y-3 font-bold">
        <slot/>
    </tbody>
</table>