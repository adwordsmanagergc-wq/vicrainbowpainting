"use client";

import { useEffect, useRef } from "react";
import { suburbs } from "@/lib/suburbs";

export default function SuburbMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    import("leaflet").then((L) => {
      if (!containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [-37.99, 145.26],
        zoom: 12,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      mapRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 19,
        }
      ).addTo(map);

      const bounds = L.latLngBounds(suburbs.map((s) => [s.lat, s.lng]));
      map.fitBounds(bounds, { padding: [50, 50] });

      suburbs.forEach((s) => {
        const isHome = s.slug === "endeavour-hills";
        const bg = isHome
          ? "background: linear-gradient(90deg,#ef4444,#f59e0b,#22c55e,#3b82f6,#a855f7);"
          : "background:#2563eb;";
        const icon = L.divIcon({
          html: `
            <a href="/painter/${s.slug}"
               style="
                display:inline-block;
                ${bg}
                color:#fff;
                padding:5px 11px;
                border-radius:9999px;
                font-size:11.5px;
                font-weight:700;
                white-space:nowrap;
                box-shadow:0 2px 10px rgba(37,99,235,0.4);
                text-decoration:none;
                font-family:Inter,Arial,sans-serif;
                border:2px solid rgba(255,255,255,0.9);
                cursor:pointer;
                transition:transform .15s, box-shadow .15s;"
               onmouseover="this.style.transform='scale(1.1)';this.style.boxShadow='0 6px 18px rgba(0,0,0,.3)'"
               onmouseout="this.style.transform='scale(1)';this.style.boxShadow='0 2px 10px rgba(37,99,235,0.4)'">
              ${s.name}${isHome ? " ★" : ""}
            </a>
          `,
          className: "",
          iconSize: [0, 0],
          iconAnchor: [0, 10],
        });

        L.marker([s.lat, s.lng], { icon }).addTo(map);
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
      <div ref={containerRef} style={{ height: "520px" }} className="w-full" />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow-lg text-xs text-gray-700 font-medium pointer-events-none z-[1000]">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
          Click any suburb pin to see services there
        </div>
        <div className="text-gray-400 text-[10px]">
          ★ Endeavour Hills · our home base
        </div>
      </div>
    </div>
  );
}
