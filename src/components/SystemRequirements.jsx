import { Info } from 'lucide-react';

function SystemRequirements() {
  return (
    <section className="rounded-2xl border border-[#0878c9] bg-[#071623] p-6">
      <div className="flex gap-3">
        <Info className="mt-0.5 size-5 shrink-0 text-[#1687ff]" />

        <div>
          <h2 className="font-bold text-[#1687ff]">System Requirements</h2>

          <p className="mt-3 text-sm leading-6 text-[#8e9caf]">
            Requires a 64-bit processor and operating system. Recommended RTX
            30-series for Ray Tracing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SystemRequirements;
