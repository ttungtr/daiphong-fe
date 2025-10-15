"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedNumber } from "@/components/common";
import { BarChart3, Clock, TrendingUp, Calendar, Zap } from "lucide-react";

type Summary = {
  today: number;
  yesterday: number;
  week: number;
  month: number;
  total: number;
};

export default function AnalyticsSection() {
  const [data, setData] = useState<Summary>({
    today: 0,
    yesterday: 0,
    week: 0,
    month: 0,
    total: 0,
  });
  const [onlineCount, setOnlineCount] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function load() {
      try {
        const res = await fetch("/api/analytics/summary", {
          signal: controller.signal,
          cache: "no-store",
        });
        const json = (await res.json()) as Summary;
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled)
          setData({ today: 0, yesterday: 0, week: 0, month: 0, total: 0 });
      }
    }

    load();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  // Fetch online count
  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    async function loadOnlineCount() {
      try {
        const res = await fetch("/api/analytics/online", {
          signal: controller.signal,
          cache: "no-store",
        });
        const json = await res.json();
        if (!cancelled) setOnlineCount(json.online || 0);
      } catch {
        if (!cancelled) setOnlineCount(0);
      }
    }

    loadOnlineCount();

    // Update online count every 30 seconds
    const interval = setInterval(loadOnlineCount, 30 * 1000);

    return () => {
      cancelled = true;
      controller.abort();
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      className="w-full md:w-1/2 ml-0 md:ml-auto"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/30 shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5 text-blue-400" />
          <span className="text-white font-semibold text-lg">
            Thống kê truy cập
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Left Column */}
          <div className="space-y-3">
            {/* Online */}
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-green-500" />
              <span className="text-white text-sm">Đang online:</span>
              <span className="text-green-400 font-semibold text-sm">
                <AnimatedNumber value={onlineCount || 0} />
              </span>
            </div>
            {/* Today */}
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-500" />
              <span className="text-white text-sm">Hôm nay:</span>
              <span className="text-white font-semibold text-sm">
                <AnimatedNumber value={data.today || 0} />
              </span>
            </div>
            {/* Month */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-500" />
              <span className="text-white text-sm">Tháng này:</span>
              <span className="text-white font-semibold text-sm">
                <AnimatedNumber value={data.month || 0} />
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {/* Yesterday */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span className="text-white text-sm">Hôm qua:</span>
              <span className="text-white font-semibold text-sm">
                <AnimatedNumber value={data.yesterday || 0} />
              </span>
            </div>

            {/* Week */}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-500" />
              <span className="text-white text-sm">Tuần này:</span>
              <span className="text-white font-semibold text-sm">
                <AnimatedNumber value={data.week || 0} />
              </span>
            </div>

            {/* Total */}
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-white text-sm">Tổng:</span>
              <span className="text-white font-semibold text-sm">
                <AnimatedNumber value={data.total || 0} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
