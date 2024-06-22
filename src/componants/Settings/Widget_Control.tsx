export default function Widget_control() {

    return (
        <div className="bg-white rounded-md p-2">
            <h1 className="font-semibold">Widget control</h1>
            <p className="text-xs">Show/Hide widget</p>
            <div className="space-y-2 mt-5">
                <div className="space-x-2 text-sm">
                    <input type="checkbox" name="quick_draft" id="" />
                    <label htmlFor="quick_draft">Quick draft</label>
                </div>
                <div className="space-x-2 text-sm">
                    <input type="checkbox" name="yearly_target" id="" />
                    <label htmlFor="yearly_target">Yearly Target</label>
                </div>
                <div className="space-x-2 text-sm">
                    <input type="checkbox" name="yearly tatget" id="" />
                    <label htmlFor="tickets_statistics">Ticket statistics</label>
                </div>
                <div className="space-x-2 text-sm">
                    <input type="checkbox" name="quick_draft" id="" />
                    <label htmlFor="last_news">Last news</label>
                </div>
                <div className="space-x-2 text-sm">
                    <input type="checkbox" name="latest_tasks" id="" />
                    <label htmlFor="latest_tasks">latest tasks</label>
                </div>
                <div className="space-x-2 text-sm">
                    <input type="checkbox" name="Top_search_items" id="" />
                    <label htmlFor="top_searched_items">Top search items</label>
                </div>
            </div>
        </div>
    )
}