/**
 * Production Telemetry & Real User Monitoring (RUM) Service
 * Tracks application health, Web Vitals, and breadcrumbs without external privacy invasion.
 * Adheres to Ponytail: zero added external dependencies, purely native platform APIs.
 */

export interface TelemetryBreadcrumb {
  category: 'quiz' | 'navigation' | 'storage' | 'network' | 'system';
  message: string;
  data?: Record<string, any>;
  timestamp: number;
}

export interface TelemetryErrorEvent {
  message: string;
  source?: string;
  lineno?: number;
  colno?: number;
  stack?: string;
  timestamp: number;
  breadcrumbs: TelemetryBreadcrumb[];
}

class TelemetryService {
  private breadcrumbs: TelemetryBreadcrumb[] = [];
  private readonly MAX_BREADCRUMBS = 50;
  private isInitialized = false;

  public init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;

    // Capture global JS unhandled errors
    window.addEventListener('error', (event: ErrorEvent) => {
      this.captureError({
        message: event.message || 'Unknown runtime error',
        source: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack,
        timestamp: Date.now(),
        breadcrumbs: [...this.breadcrumbs]
      });
    });

    // Capture unhandled Promise rejections
    window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
      this.captureError({
        message: `Unhandled Rejection: ${event.reason?.message || String(event.reason)}`,
        stack: event.reason?.stack,
        timestamp: Date.now(),
        breadcrumbs: [...this.breadcrumbs]
      });
    });

    // Observe Core Web Vitals if supported by browser PerformanceObserver
    this.initWebVitals();

    this.addBreadcrumb('system', 'Telemetry initialized in production mode');
  }

  public addBreadcrumb(category: TelemetryBreadcrumb['category'], message: string, data?: Record<string, any>): void {
    const entry: TelemetryBreadcrumb = {
      category,
      message,
      data,
      timestamp: Date.now()
    };

    this.breadcrumbs.push(entry);
    if (this.breadcrumbs.length > this.MAX_BREADCRUMBS) {
      this.breadcrumbs.shift();
    }
  }

  public captureError(errorEvent: TelemetryErrorEvent): void {
    // In dev: readable console warning
    if (import.meta.env.DEV) {
      console.warn('[Telemetry Error Captured]:', errorEvent.message, errorEvent);
      return;
    }

    // In prod: store in recent error ledger or transmit to webhook/Sentry if configured
    try {
      const recentErrors = JSON.parse(sessionStorage.getItem('on_av_recent_errors') || '[]');
      recentErrors.unshift({
        message: errorEvent.message,
        timestamp: errorEvent.timestamp,
        stackSnippet: errorEvent.stack?.slice(0, 300)
      });
      sessionStorage.setItem('on_av_recent_errors', JSON.stringify(recentErrors.slice(0, 10)));
    } catch {}
  }

  private initWebVitals(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this.addBreadcrumb('system', 'WebVital LCP', { durationMs: Math.round(lastEntry.startTime) });
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.addBreadcrumb('system', 'WebVital CLS', { score: clsValue.toFixed(4) });
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch {
      // PerformanceObserver unsupported or restricted in browser environment
    }
  }

  public getBreadcrumbs(): TelemetryBreadcrumb[] {
    return [...this.breadcrumbs];
  }
}

export const telemetry = new TelemetryService();
