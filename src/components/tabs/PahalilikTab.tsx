import { BarChart3, Check, MapPin } from "lucide-react";
import { useAppContext } from "@/context/AppContext";

export function PahalilikTab() {
  const { selectedDistrict } = useAppContext();

  const categories = [
    { name: "Kira", score: 5, color: "bg-orange-500" },
    { name: "Ulaşım", score: 7, color: "bg-red-500" },
    { name: "Market & Gıda", score: 5, color: "bg-orange-500" },
    { name: "Dışarıda Yemek", score: 6, color: "bg-orange-500" },
    { name: "Genel Yaşam", score: 6, color: "bg-orange-500" },
  ];

  const districts = [
    { name: "Sultanbeyli", score: 4.8, color: "bg-orange-400", highlight: false },
    { name: "Pendik", score: 5.5, color: "bg-orange-400", highlight: false },
    { name: "Kartal", score: 5.8, color: "bg-orange-400", highlight: false },
    { name: "Sancaktepe", score: 6.2, color: "bg-red-500", highlight: true },
    { name: "Ümraniye", score: 7.1, color: "bg-red-500", highlight: false },
    { name: "Kadıköy", score: 8.4, color: "bg-red-500", highlight: false },
    { name: "Beşiktaş", score: 9.6, color: "bg-red-500", highlight: false },
  ];

  const benefits = [
    "KYK yurdu ile kira maliyeti minimumda (1.500 ₺)",
    "Market fiyatları İstanbul ortalamasının altında",
    "Kent Lokantası ile günlük yemek ~20 ₺",
    "19S hattı ile gece ulaşımı güvende",
    "Sancaktepe Belediyesi öğrenci bursu mevcut",
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-black">Pahalılık Rehberi</h2>
        <p className="text-sm text-[#6B7280]">{selectedDistrict} ve İstanbul karşılaştırması</p>
      </div>

      {/* Section 1 - İlçe Pahalılık Skoru */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-[#6B7280] mb-1">Pahalılık Skoru</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-orange-600">6.2</span>
              <span className="text-lg text-[#6B7280]">/ 10</span>
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1">
              <Check className="h-3.5 w-3.5 text-green-600" />
              <span className="text-xs font-medium text-green-700">Öğrenci Dostu İlçe</span>
            </div>
            <p className="mt-3 text-xs text-[#9CA3AF]">
              10 = İstanbul&apos;un en pahalı ilçesi (Beşiktaş, Sarıyer)
            </p>
          </div>
          
          {/* Vertical Slider */}
          <div className="relative h-32 w-8 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-400 to-orange-600 rounded-full transition-all duration-500"
              style={{ height: '62%' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Category Breakdown */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
        <h3 className="text-lg font-semibold text-black mb-4">Kategori Kırılımı</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <div key={cat.name} className="flex items-center gap-3">
              <span className="text-sm text-[#374151] w-28">{cat.name}</span>
              <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${cat.color} rounded-full transition-all duration-500`}
                  style={{ width: `${cat.score * 10}%` }}
                />
              </div>
              <span className="text-sm font-medium text-[#374151] w-8 text-right">{cat.score}/10</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 - İstanbul İlçe Karşılaştırması */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
        <h3 className="text-lg font-semibold text-black mb-1">İstanbul İlçe Karşılaştırması</h3>
        <p className="text-xs text-[#6B7280] mb-4">Öğrenciler için genel yaşam maliyeti (düşük = ucuz)</p>
        
        <div className="space-y-2">
          {districts.map((d) => (
            <div key={d.name} className="flex items-center gap-3">
              {d.highlight && (
                <span className="text-red-500 font-bold text-lg">[</span>
              )}
              {!d.highlight && <span className="w-3" />}
              <span className={`text-sm w-24 ${d.highlight ? 'font-semibold text-black' : 'text-[#374151]'}`}>
                {d.name}
              </span>
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${d.color} rounded-full transition-all duration-500`}
                  style={{ width: `${d.score * 10}%` }}
                />
              </div>
              <span className={`text-sm font-medium w-10 text-right ${d.highlight ? 'text-red-600 font-bold' : 'text-[#374151]'}`}>
                {d.score}
              </span>
              {d.highlight && <span className="w-4" />}
              {!d.highlight && <span className="w-6" />}
            </div>
          ))}
        </div>

        {/* Highlighted Footer */}
        <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-black">Sancaktepe</span>
            <span className="text-orange-600 font-bold">6.2</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
            <span>Sen buradasın</span>
            <MapPin className="h-4 w-4 text-orange-500" />
          </div>
        </div>
      </div>

      {/* Section 4 - Sancaktepe Neden Mantıklı? */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 className="text-lg font-semibold text-black mb-4">Sancaktepe Neden Mantıklı?</h3>
        <div className="space-y-2.5">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 mt-0.5">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm text-[#374151]">{benefit}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-[#6B7280] italic">
          * Veriler 2025 yılı öğrenci harcama analizine dayanmaktadır.
        </p>
      </div>
    </div>
  );
}
