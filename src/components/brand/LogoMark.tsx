export function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-14 w-14 shrink-0">
        <div className="absolute inset-0 rotate-[18deg] rounded-[18px] bg-gradient-to-r from-secondary-900 via-secondary-700 to-primary-base shadow-lg" />
        <div className="absolute inset-x-[7px] top-[22px] h-[14px] rounded-md bg-[#f8f9fb]" />
        <div className="absolute inset-x-[16px] top-[12px] h-[16px] rounded-md bg-[#f8f9fb]" />
        <div className="absolute left-[18px] top-[10px] h-[20px] w-[20px] rounded-[8px] rotate-45 bg-gradient-to-b from-primary-base to-secondary-base opacity-90" />
      </div>

      {!compact && (
        <div>
          <div className="font-heading text-[2.2rem] font-bold tracking-[-0.08em] text-transparent bg-gradient-to-r from-secondary-900 via-secondary-base to-primary-base bg-clip-text">
            FRONTLINE
          </div>
          <div className="-mt-2 font-heading text-[2.2rem] font-bold tracking-[-0.08em] text-transparent bg-gradient-to-r from-primary-base via-secondary-base to-secondary-900 bg-clip-text">
            ADVANTAGE
          </div>
        </div>
      )}
    </div>
  );
}
