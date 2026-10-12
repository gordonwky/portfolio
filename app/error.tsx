"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="page-shell flex min-h-screen items-center justify-center px-6">
      <div className="soft-panel w-full max-w-xl rounded-[32px] px-8 py-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--accent)]">
          Something went wrong
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl text-[color:var(--heading)]">
          The page hit an unexpected error.
        </h1>
        <p className="mt-4 text-sm leading-7 text-[color:var(--body)]">
          Try refreshing once more, or use the button below to retry without leaving the page.
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
          Try again
        </button>
      </div>
    </div>
  );
}
