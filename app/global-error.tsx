"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell flex min-h-screen items-center justify-center px-6">
          <div className="soft-panel w-full max-w-xl rounded-[32px] px-8 py-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">
              Global error
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl text-[color:var(--heading)]">
              The app ran into a rendering problem.
            </h1>
            <p className="mt-4 text-sm leading-7 text-[color:var(--body)]">
              {error.message || "An unexpected error occurred."}
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em]"
              style={{
                background: "var(--button-primary-bg)",
                color: "var(--button-primary-text)",
              }}
            >
              Reload app
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
