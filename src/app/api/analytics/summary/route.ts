import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { NextRequest } from "next/server";

export const runtime = "nodejs";

type SummaryResponse = {
  today: number;
  yesterday: number;
  week: number;
  month: number;
  total: number;
};

export async function GET(req: NextRequest) {
  try {
    const measurementId =
      process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-3XXG55DLFC";
    const propertyId = process.env.GA4_PROPERTY_ID || "501666594";
    const clientEmail =
      process.env.GA4_CLIENT_EMAIL ||
      "philongweb@amiable-flames-469515-n8.iam.gserviceaccount.com";
    const privateKey = (
      process.env.GA4_PRIVATE_KEY ||
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQD5896ZBqiql/nI\nu0yxNROIns5TIqnOvrO0OkaQplN1017lueCO8nOGl6m8PBizRhp/hVKOG/f8L6VP\nFaAVwlxeFNmc1Nh57fSURBbGg1/McOXrDvNIPplvbNAO6VgxbEBxgXRcQtW5oFlJ\n7H0eSZ9e2Mj+N8ocp7bGidy3d158nVyfZuufbnlSuaH/4b2cDbDkGPBo2FqIMayg\nueSwSsWhV2H8QO61rzB8q57XkAjqpYLaorO2pVUNlUhDEE1HzyXmw4xMV+kuEUR7\nc7zpXQYMe1DvLmCVshRLrC6CuryI/orlA52ImiHdLM6uvAI3nbGf5K8rqRSdzYi+\nPQpW7RYPAgMBAAECggEAVFRZ8qkTeNLjfDztCBCPMZXaqKPWRKGEgbbzndPv7p3M\ns5b901yra2p54r8n2jw5rnJtwvJevV/Z1w/FvfGgNkG0lbwd+S02Sluaj4k9Zf1l\nJOQbYnF0VOqSW6WQksQiDemON554+zLFTTKTmAdg1KAxV8u8zeQrv1o99Ew6vbGz\nH6MPSCwZBGY0bustChNYbXpNVEN6qVgIgHdcEIWNjxNojj9WwicVeD9eqd+vM24p\n06wEzon6A8WWIvxJBJ6PG/aazSyCgAscbUsw6oCENPfnIA9qAPcuBbgVMGrP8kZ3\nctkQD9Csz54svs8BAyqPf8phHYwmHcu7Tstp6owHQQKBgQD+smFW+zviWilrIYig\nDdLs9CjwWIAtsOOF3V9SVU0BgnpkgV9fNRcIg+0eieVlKRphy9v5nCXB9EF0jJ3L\n062V6vsO4whTB/ucB/NEW5+TuF+ADSU+ONgNwS2Sso0rx/kg2Vv03ZT2dM5iKipC\nACw9eqzIkJpnnKCzpx0uuISOrwKBgQD7O0ZoEEjxzkcxtA7ylj+lPA3Wv0ciHzU2\n3Lv4iD4Iyy2fjVZqrcMCr9P9qqUgsTzNJIV9w62FZMA1kBijOkT4j6MJtytCObO/\n22sYeMpe9vCMTqRkzdykbj4/djG0xZ/YFxx1T0eSy518Ghn3rEf8QG2N2Zks02XO\nZ1zjewzGoQKBgA+bfruFybWlMMSP2X91WWeLzrZrte8W19psJls1PvLIvBdMljuP\nVUoAS5eDe7snOaakh2ZUWzv3a8tokoLbBdgZ/ih7YRc1dgWptw6JTs4Ojkuagp29\nff/ZxqEmr9/u8SVCLJBkw6wWnE8Hpm9E83ERA2WG9u9CedaIdxFV3UmhAoGBAOYg\n5d1tDWRyD8T3qrmL58Dzwbl0fTREYfpfN8/w/OIROzlrvjz57igH56f1KE1KDOfd\nDGqnU8tc/rQRyn+6YHNPH4lGv9lqAb08wF0qSDW0/aOIZg3whKwaT+rR2bY9UK4g\nfXD3rhhJa3jCcAbvSQFIAxJswGLPQfJPvEaj8JABAoGAGVt0jy0vDuR3w+Y4Qub3\nU4mG25ho+mxoGb8uvNMtKewyr6ggQ845r9g/uWdthACxxt8Cuzh3xl2IL4YGYwV9\nEJwszRNGEAkKcw9FqXLkfBUQYNAPdQ9/wPZ9GUEPvFwXOk7Hci/zARKtKiSZpjp1\nqqZqa+SEUdJxNUqvyILh6ic=\n-----END PRIVATE KEY-----\n"
    ).replace(/\\n/g, "\n");

    if (!measurementId || !propertyId || !clientEmail || !privateKey) {
      const fallback: SummaryResponse = {
        today: 0,
        yesterday: 0,
        week: 0,
        month: 0,
        total: 0,
      };
      return Response.json(fallback, { status: 200 });
    }

    const client = new BetaAnalyticsDataClient({
      credentials: { client_email: clientEmail, private_key: privateKey },
    });
    // Use three independent calls for clarity/accuracy
    const metricName = "screenPageViews"; // Canonical GA4 metric name

    // Force Vietnam timezone - UTC-based approach
    const tz = "Asia/Ho_Chi_Minh";

    // Get current UTC time and convert to Vietnam time (UTC+7)
    const now = new Date();
    const vietnamOffset = 7; // Vietnam is UTC+7

    // Get current date in Vietnam timezone
    const vietnamDate = new Date(
      now.getTime() + vietnamOffset * 60 * 60 * 1000
    );

    // Format today's date
    const todayStr = vietnamDate.toISOString().split("T")[0];

    // Calculate yesterday's date
    const yesterdayDate = new Date(vietnamDate);
    yesterdayDate.setUTCDate(yesterdayDate.getUTCDate() - 1);
    const yesterdayStr = yesterdayDate.toISOString().split("T")[0];

    // Calculate start of week (Monday) in Vietnam time
    const startOfWeek = new Date(vietnamDate);
    const dayOfWeek = startOfWeek.getUTCDay(); // 0=Sun, 1=Mon, ...
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    startOfWeek.setUTCDate(startOfWeek.getUTCDate() + diffToMonday);
    const startOfWeekStr = startOfWeek.toISOString().split("T")[0];

    // Calculate start of month
    const startOfMonth = new Date(
      vietnamDate.getUTCFullYear(),
      vietnamDate.getUTCMonth(),
      1
    );
    const startOfMonthStr = startOfMonth.toISOString().split("T")[0];

    const [
      [todayReport],
      [yesterdayReport],
      [weekReport],
      [monthReport],
      [totalReport],
    ] = await Promise.all([
      client.runReport({
        property: `properties/${propertyId}`,
        metrics: [{ name: metricName }],
        dateRanges: [{ startDate: todayStr, endDate: todayStr }],
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        metrics: [{ name: metricName }],
        dateRanges: [{ startDate: yesterdayStr, endDate: yesterdayStr }],
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        metrics: [{ name: metricName }],
        dateRanges: [{ startDate: startOfWeekStr, endDate: todayStr }],
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        metrics: [{ name: metricName }],
        dateRanges: [{ startDate: startOfMonthStr, endDate: todayStr }],
      }),
      client.runReport({
        property: `properties/${propertyId}`,
        metrics: [{ name: metricName }],
        dateRanges: [{ startDate: "2015-08-14", endDate: todayStr }],
      }),
    ]);

    const today = Number(todayReport.rows?.[0]?.metricValues?.[0]?.value ?? 0);
    const yesterday = Number(
      yesterdayReport.rows?.[0]?.metricValues?.[0]?.value ?? 0
    );
    const week = Number(weekReport.rows?.[0]?.metricValues?.[0]?.value ?? 0);
    const month = Number(monthReport.rows?.[0]?.metricValues?.[0]?.value ?? 0);
    const total = Number(totalReport.rows?.[0]?.metricValues?.[0]?.value ?? 0);

    const payload: SummaryResponse = { today, yesterday, week, month, total };

    const url = new URL(req.url);
    if (url.searchParams.get("debug") === "1") {
      return Response.json({
        ...payload,
        debug: {
          propertyId,
          metric: metricName,
          tz,
          todayStr,
          startOfWeekStr,
          now: now.toISOString(),
          vietnamDate: vietnamDate.toISOString(),
          todayRow: todayReport.rows?.[0],
          weekRow: weekReport.rows?.[0],
          totalRow: totalReport.rows?.[0],
        },
      });
    }

    return Response.json(payload, { status: 200 });
  } catch (error: unknown) {
    const fallback: SummaryResponse = {
      today: 0,
      yesterday: 0,
      week: 0,
      month: 0,
      total: 0,
    };
    return Response.json(
      { ...fallback, error: (error as Error).message },
      { status: 200 }
    );
  }
}
