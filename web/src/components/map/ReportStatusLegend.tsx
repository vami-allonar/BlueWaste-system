import { MAP_STATUS_LEGEND } from "@/types";

/** A compact overlay explaining the colour of report markers on Leaflet maps. */
export default function ReportStatusLegend() {
  return (
    <aside
      aria-label="Waste report status legend"
      className="pointer-events-auto absolute bottom-3 right-3 z-[1000] rounded-lg border border-slate-200 bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm"
    >
      <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-700">
        Marker status
      </p>
      <ul className="space-y-1" role="list">
        {MAP_STATUS_LEGEND.map((status) => (
          <li
            key={status.label}
            className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600"
          >
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full ring-1 ring-black/10"
              style={{ backgroundColor: status.color }}
            />
            {status.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
