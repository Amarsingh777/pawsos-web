export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* large orange glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-orange-200 rounded-full blur-[140px] opacity-30"></div>

      {/* right glow */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-orange-300 rounded-full blur-[140px] opacity-20"></div>

      {/* center soft glow */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px] opacity-30"></div>

    </div>
  );
}