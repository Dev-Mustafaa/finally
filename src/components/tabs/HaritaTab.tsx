import { MapView } from "@/components/MapView";
import { N8nChat } from "@/components/N8nChat";

export function HaritaTab() {
  return (
    <div className="relative w-full h-full">
      <MapView />
      <N8nChat />
    </div>
  );
}
